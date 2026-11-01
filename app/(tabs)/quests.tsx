import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useMemo, useState } from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Modal, Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { ThemedText, ThemedView } from '@/components/Themed';

type Quest = { id: string; title: string; category: string; note: string; done: boolean };
const STORAGE_KEY = 'vibequest.records.v1';
const categories = ['All', 'Wellness', 'Kindness', 'Focus', 'Fun'];
const initialQuests: Quest[] = [
  { id: 'starter-1', title: 'Take a short walk', category: 'Wellness', note: 'A little fresh air can reset your day.', done: false },
  { id: 'starter-2', title: 'Send someone a kind message', category: 'Kindness', note: 'Make someone smile today.', done: false },
  { id: 'starter-3', title: 'Drink a glass of water', category: 'Wellness', note: 'Pause and take care of yourself.', done: false },
];

export default function TasksScreen() {
  const [items, setItems] = useState<Quest[]>([]);
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [formCategory, setFormCategory] = useState('Wellness');

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(STORAGE_KEY)
      .then((value) => { if (active) setItems(value ? JSON.parse(value) as Quest[] : initialQuests); })
      .catch(() => { if (active) setItems(initialQuests); })
      .finally(() => { if (active) setReady(true); });
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (ready) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items)).catch(() => Alert.alert('Save failed', 'Please try again.'));
  }, [items, ready]);

  const visibleItems = useMemo(() => items.filter((item) =>
    (category === 'All' || item.category === category) &&
    `${item.title} ${item.note} ${item.category}`.toLowerCase().includes(query.trim().toLowerCase()),
  ), [items, category, query]);

  const openForm = (item?: Quest) => {
    setEditingId(item?.id ?? null); setTitle(item?.title ?? ''); setNote(item?.note ?? ''); setFormCategory(item?.category ?? 'Wellness'); setModalOpen(true);
  };
  const save = () => {
    if (!title.trim()) { Alert.alert('Add a title', 'Give your quest a short name first.'); return; }
    if (editingId) setItems((current) => current.map((item) => item.id === editingId ? { ...item, title: title.trim(), note: note.trim(), category: formCategory } : item));
    else setItems((current) => [{ id: `${Date.now()}`, title: title.trim(), note: note.trim(), category: formCategory, done: false }, ...current]);
    setModalOpen(false);
  };
  const remove = (id: string) => setDeleteId(id);

  return (
    <ThemedView style={styles.page}>
      <FlatList
        data={visibleItems} keyExtractor={(item) => item.id} keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}
        ListHeaderComponent={<>
          <View style={styles.topline}><View><ThemedText style={styles.kicker}>Your daily tasks</ThemedText><ThemedText style={styles.title}>My quests</ThemedText></View><Pressable style={styles.addButton} onPress={() => openForm()} accessibilityRole="button"><ThemedText style={styles.addText}>＋ Add</ThemedText></Pressable></View>
          <ThemedText style={styles.subtitle}>Small steps make brighter days.</ThemedText>
          <View style={styles.progressCard}><View style={styles.progressRow}><ThemedText style={styles.progressTitle}>Task progress</ThemedText><ThemedText style={styles.progressCount}>{items.filter((item) => item.done).length}/{items.length}</ThemedText></View><View style={styles.track}><View style={[styles.fill, { width: `${items.length ? items.filter((item) => item.done).length / items.length * 100 : 0}%` }]} /></View></View>
          <TextInput style={styles.search} value={query} onChangeText={setQuery} placeholder="Search your quests..." placeholderTextColor="#6a7b90" accessibilityLabel="Search quests" />
          <View style={styles.filters}>{categories.map((value) => <Pressable key={value} onPress={() => setCategory(value)} style={[styles.chip, category === value && styles.chipActive]}><ThemedText style={[styles.chipText, category === value && styles.chipTextActive]}>{value}</ThemedText></Pressable>)}</View>
          <ThemedText style={styles.section}>Your list <ThemedText style={styles.sectionCount}>· {visibleItems.length}</ThemedText></ThemedText>
        </>}
        renderItem={({ item }) => <View style={[styles.card, item.done && styles.cardDone]}>
          <Pressable onPress={() => setItems((current) => current.map((quest) => quest.id === item.id ? { ...quest, done: !quest.done } : quest))} style={[styles.check, item.done && styles.checked]} accessibilityRole="checkbox" accessibilityState={{ checked: item.done }}><ThemedText style={styles.checkmark}>{item.done ? '✓' : ''}</ThemedText></Pressable>
          <Pressable style={styles.details} onPress={() => openForm(item)}><ThemedText style={[styles.questTitle, item.done && styles.strike]}>{item.title}</ThemedText>{item.note ? <ThemedText style={styles.note} numberOfLines={2}>{item.note}</ThemedText> : null}<ThemedText style={styles.categoryTag}>{item.category.toUpperCase()}</ThemedText></Pressable>
          <Pressable onPress={() => openForm(item)} style={styles.action} accessibilityLabel="Edit quest"><ThemedText style={styles.actionText}>✎</ThemedText></Pressable><Pressable onPress={() => remove(item.id)} style={styles.action} accessibilityLabel="Delete quest"><ThemedText style={styles.deleteText}>×</ThemedText></Pressable>
        </View>}
        ListEmptyComponent={<View style={styles.empty}><ThemedText style={styles.emptyTitle}>{ready ? 'No quests found' : 'Loading your quests...'}</ThemedText><ThemedText style={styles.note}>Try another search or add a new quest.</ThemedText></View>}
      />
      <Modal visible={deleteId !== null} transparent animationType="fade" onRequestClose={() => setDeleteId(null)}>
        <View style={styles.modalShade}><View style={styles.sheet}>
          <ThemedText style={styles.sheetTitle}>Delete this quest?</ThemedText>
          <ThemedText style={styles.note}>This task will be permanently removed from your list.</ThemedText>
          <Pressable style={styles.saveButton} accessibilityRole="button" onPress={() => {
            setItems((current) => current.filter((item) => item.id !== deleteId));
            setDeleteId(null);
          }}><ThemedText style={styles.saveText}>Delete quest</ThemedText></Pressable>
          <Pressable style={styles.action} accessibilityRole="button" onPress={() => setDeleteId(null)}><ThemedText style={styles.close}>Cancel</ThemedText></Pressable>
        </View></View>
      </Modal>
      <Modal visible={modalOpen} animationType="slide" transparent onRequestClose={() => setModalOpen(false)}>
        <KeyboardAvoidingView style={styles.modalShade} behavior={Platform.OS === 'ios' ? 'padding' : undefined}><View style={styles.sheet}>
          <View style={styles.sheetHeader}><ThemedText style={styles.sheetTitle}>{editingId ? 'Edit quest' : 'New quest'}</ThemedText><Pressable onPress={() => setModalOpen(false)}><ThemedText style={styles.close}>×</ThemedText></Pressable></View>
          <ThemedText style={styles.label}>Title</ThemedText><TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="e.g. Read for ten minutes" placeholderTextColor="#6a7b90" maxLength={70} />
          <ThemedText style={styles.label}>Note (optional)</ThemedText><TextInput style={[styles.input, styles.multiline]} value={note} onChangeText={setNote} placeholder="Add a little detail..." placeholderTextColor="#6a7b90" multiline maxLength={160} />
          <ThemedText style={styles.label}>Category</ThemedText><View style={styles.filters}>{categories.slice(1).map((value) => <Pressable key={value} onPress={() => setFormCategory(value)} style={[styles.chip, formCategory === value && styles.chipActive]}><ThemedText style={[styles.chipText, formCategory === value && styles.chipTextActive]}>{value}</ThemedText></Pressable>)}</View>
          <Pressable style={styles.saveButton} onPress={save}><ThemedText style={styles.saveText}>{editingId ? 'Save changes' : 'Add to my quests'}</ThemedText></Pressable>
        </View></KeyboardAvoidingView>
      </Modal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f3f6fa' }, content: { width: '100%', maxWidth: 760, alignSelf: 'center', padding: 22, paddingTop: 30, paddingBottom: 36 },
  topline: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, kicker: { color: '#516781', fontSize: 13, fontWeight: '600' }, title: { color: '#142d4e', fontSize: 29, fontWeight: '800', marginTop: 5 }, subtitle: { color: '#566578', fontSize: 14, marginTop: 5, marginBottom: 19 },
  addButton: { backgroundColor: '#214e80', borderRadius: 14, paddingVertical: 11, paddingHorizontal: 15 }, addText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  progressCard: { backgroundColor: '#142d4e', borderRadius: 18, padding: 17, marginBottom: 17 }, progressRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }, progressTitle: { color: '#fff', fontSize: 14, fontWeight: '700' }, progressCount: { color: '#cbdcf0', fontSize: 14, fontWeight: '700' }, track: { height: 7, borderRadius: 8, backgroundColor: '#385477', overflow: 'hidden' }, fill: { height: '100%', backgroundColor: '#b6d4f4', borderRadius: 8 },
  search: { backgroundColor: '#fff', borderColor: '#dce4ee', borderWidth: 1, borderRadius: 13, paddingHorizontal: 15, height: 47, color: '#1e3046', fontSize: 14 }, filters: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 }, chip: { borderRadius: 18, paddingVertical: 7, paddingHorizontal: 12, backgroundColor: '#e8eef5' }, chipActive: { backgroundColor: '#214e80' }, chipText: { color: '#4b5f75', fontSize: 12, fontWeight: '600' }, chipTextActive: { color: '#fff' }, section: { color: '#142d4e', fontSize: 17, fontWeight: '800', marginTop: 22, marginBottom: 12 }, sectionCount: { color: '#62768d', fontWeight: '500' },
  card: { flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#dce4ee', padding: 14, marginBottom: 10 }, cardDone: { backgroundColor: '#f3faf5', borderColor: '#d9eee0' }, check: { width: 25, height: 25, borderWidth: 1.5, borderColor: '#99abc0', borderRadius: 9, marginTop: 2, alignItems: 'center', justifyContent: 'center' }, checked: { backgroundColor: '#214e80', borderColor: '#214e80' }, checkmark: { color: '#fff', fontSize: 15, fontWeight: '800' }, details: { flex: 1, paddingHorizontal: 11 }, questTitle: { color: '#1e3046', fontSize: 15, fontWeight: '700', lineHeight: 21 }, strike: { textDecorationLine: 'line-through', color: '#64768a' }, note: { color: '#566578', fontSize: 12, lineHeight: 18, marginTop: 4 }, categoryTag: { color: '#355d89', fontSize: 9, fontWeight: '800', letterSpacing: 1.1, marginTop: 8 }, action: { paddingHorizontal: 5, paddingVertical: 2 }, actionText: { color: '#516781', fontSize: 18 }, deleteText: { color: '#aa3549', fontSize: 21 }, empty: { alignItems: 'center', padding: 24, backgroundColor: '#fff', borderRadius: 15 }, emptyTitle: { color: '#142d4e', fontWeight: '700', fontSize: 15 },
  modalShade: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(20,45,78,0.35)' }, sheet: { backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 22, paddingTop: 22, paddingBottom: 32 }, sheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }, sheetTitle: { color: '#142d4e', fontSize: 22, fontWeight: '800' }, close: { fontSize: 28, color: '#566578' }, label: { color: '#516781', fontSize: 10, fontWeight: '800', letterSpacing: 1.2, marginBottom: 8, marginTop: 14 }, input: { borderWidth: 1, borderColor: '#dce4ee', borderRadius: 12, paddingHorizontal: 13, paddingVertical: 12, fontSize: 14, color: '#1e3046', backgroundColor: '#fafcff' }, multiline: { minHeight: 75, textAlignVertical: 'top' }, saveButton: { backgroundColor: '#214e80', borderRadius: 14, padding: 15, alignItems: 'center', marginTop: 24 }, saveText: { color: '#fff', fontSize: 15, fontWeight: '700' },
});
