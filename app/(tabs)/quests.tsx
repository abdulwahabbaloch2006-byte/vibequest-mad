import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

import { Text, View } from '@/components/Themed';

type QuestItem = { id: number; emoji: string; title: string; detail: string; xp: number; color: string };

const starterQuests: QuestItem[] = [
  { id: 1, emoji: '🌞', title: 'Sunshine scout', detail: 'Step outside and spot one lovely thing.', xp: 25, color: '#ffefcf' },
  { id: 2, emoji: '🎧', title: 'One-song dance party', detail: 'Pick a song. Give it your best moves.', xp: 30, color: '#fce1ee' },
  { id: 3, emoji: '💌', title: 'Kindness courier', detail: 'Send a friend a happy little message.', xp: 25, color: '#dff4e9' },
  { id: 4, emoji: '🧠', title: 'Brain sparkle', detail: 'Learn one surprising new fact.', xp: 20, color: '#e9e2ff' },
  { id: 5, emoji: '📸', title: 'Tiny treasure hunt', detail: 'Find something that makes you smile.', xp: 20, color: '#dff0ff' },
  { id: 6, emoji: '🧃', title: 'Hydration celebration', detail: 'Drink a glass of water like a champion.', xp: 15, color: '#ffe3d2' },
];

export default function QuestsScreen() {
  const [completed, setCompleted] = useState<number[]>([]);
  const done = (id: number) => completed.includes(id);
  const toggle = (id: number) => {
    const isDone = done(id);
    setCompleted((current) => isDone ? current.filter((item) => item !== id) : [...current, id]);
    void Haptics.notificationAsync(isDone ? Haptics.NotificationFeedbackType.Warning : Haptics.NotificationFeedbackType.Success);
  };
  const xp = starterQuests.reduce((total, item) => total + (done(item.id) ? item.xp : 0), 0);

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.kicker}>PICK YOUR PLOT TWIST</Text>
      <Text style={styles.title}>Quest board<Text style={styles.titleDot}>.</Text></Text>
      <Text style={styles.subtitle}>Little missions for a big main-character day.</Text>

      <LinearGradient colors={['#8d76eb', '#b594ff']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.progressCard}>
        <View style={styles.progressTop}><View><Text style={styles.progressLabel}>{"TODAY'S PROGRESS"}</Text><Text style={styles.progressTitle}>{completed.length} of {starterQuests.length} quests</Text></View><Text style={styles.trophy}>🏆</Text></View>
        <View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${(completed.length / starterQuests.length) * 100}%` }]} /></View>
        <View style={styles.progressBottom}><Text style={styles.progressHint}>{xp} XP earned</Text><Text style={styles.progressHint}>One quest at a time ✨</Text></View>
      </LinearGradient>

      <View style={styles.listHead}><Text style={styles.listTitle}>Choose your next quest</Text><Text style={styles.listCount}>{starterQuests.length - completed.length} LEFT</Text></View>
      {starterQuests.map((item) => (
        <Pressable key={item.id} onPress={() => toggle(item.id)} style={({ pressed }) => [styles.quest, pressed && styles.pressed, done(item.id) && styles.questDone]}>
          <View style={[styles.questEmoji, { backgroundColor: item.color }]}><Text style={styles.questEmojiText}>{item.emoji}</Text></View>
          <View style={styles.questBody}><Text style={[styles.questTitle, done(item.id) && styles.doneText]}>{item.title}</Text><Text style={styles.questDetail}>{item.detail}</Text></View>
          <View style={[styles.check, done(item.id) && styles.checkDone]}><Text style={styles.checkText}>{done(item.id) ? '✓' : `+${item.xp}`}</Text></View>
        </Pressable>
      ))}
      <View style={styles.bottomNote}><Text style={styles.bottomNoteText}>Tap a quest to complete it and collect XP.</Text></View>
      <View style={{ height: 18 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f7f4ff' },
  content: { paddingHorizontal: 21, paddingTop: 25, paddingBottom: 24 },
  kicker: { color: '#89839e', fontSize: 9, fontWeight: '900', letterSpacing: 1.6 },
  title: { color: '#211c34', fontSize: 29, lineHeight: 36, fontWeight: '900', letterSpacing: -0.9, marginTop: 5 },
  titleDot: { color: '#fa8c7b' },
  subtitle: { color: '#858096', fontSize: 12, lineHeight: 18, marginTop: 5, marginBottom: 18 },
  progressCard: { padding: 17, borderRadius: 22, minHeight: 132 },
  progressTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  progressLabel: { color: '#ece4ff', fontSize: 8, fontWeight: '900', letterSpacing: 1.3 },
  progressTitle: { color: '#fff', fontSize: 17, fontWeight: '900', marginTop: 4 },
  trophy: { fontSize: 30 },
  progressTrack: { height: 7, borderRadius: 8, backgroundColor: '#ffffff4d', marginTop: 14, overflow: 'hidden' },
  progressFill: { height: 7, borderRadius: 8, backgroundColor: '#fff' },
  progressBottom: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 7 },
  progressHint: { color: '#f4efff', fontSize: 9, fontWeight: '700' },
  listHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 22, marginBottom: 10 },
  listTitle: { color: '#211c34', fontSize: 15, fontWeight: '900' },
  listCount: { color: '#9089a5', fontSize: 8, fontWeight: '900', letterSpacing: 1 },
  quest: { flexDirection: 'row', alignItems: 'center', minHeight: 73, backgroundColor: '#fff', borderWidth: 1, borderColor: '#eee8fa', borderRadius: 18, padding: 11, marginBottom: 8 },
  questDone: { backgroundColor: '#f1eff5', opacity: 0.76 },
  questEmoji: { width: 44, height: 44, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  questEmojiText: { fontSize: 21 },
  questBody: { flex: 1, marginLeft: 11, marginRight: 6 },
  questTitle: { color: '#29233e', fontSize: 11, fontWeight: '900' },
  doneText: { textDecorationLine: 'line-through', color: '#817c8e' },
  questDetail: { color: '#8e899d', fontSize: 9, lineHeight: 14, marginTop: 4 },
  check: { minWidth: 38, height: 32, borderRadius: 11, backgroundColor: '#f0ecfa', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 7 },
  checkDone: { backgroundColor: '#c8f1dd' },
  checkText: { color: '#665a8b', fontSize: 9, fontWeight: '900' },
  pressed: { transform: [{ scale: 0.985 }] },
  bottomNote: { alignItems: 'center', paddingTop: 5 },
  bottomNoteText: { color: '#9992a9', fontSize: 9, fontWeight: '700' },
});


