import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText, ThemedView } from '@/components/Themed';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <ThemedText style={styles.brand}>VibeQuest</ThemedText>
      <ThemedText style={styles.subtitle}>Simple ideas to make your day brighter.</ThemedText>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.emoji}>🌞</ThemedText>
        <ThemedText style={styles.heading}>Today’s small challenge</ThemedText>
        <ThemedText style={styles.body}>Say something kind to a friend or family member.</ThemedText>
      </ThemedView>
      <ThemedText style={styles.section}>How it works</ThemedText>
      <ThemedText style={styles.body}>1. Open Tasks</ThemedText>
      <ThemedText style={styles.body}>2. Choose one activity</ThemedText>
      <ThemedText style={styles.body}>3. Mark it complete</ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f3f6fa' },
  content: { width: '100%', maxWidth: 760, alignSelf: 'center', padding: 24, paddingTop: 36 },
  brand: { color: '#142d4e', fontSize: 30, fontWeight: '800' },
  subtitle: { color: '#566578', fontSize: 15, marginTop: 6, marginBottom: 26 },
  card: { backgroundColor: '#fff', borderRadius: 18, padding: 20, borderWidth: 1, borderColor: '#dce4ee' },
  emoji: { fontSize: 34, marginBottom: 12 },
  heading: { color: '#142d4e', fontSize: 19, fontWeight: '700' },
  body: { color: '#4b5f75', fontSize: 15, lineHeight: 23, marginTop: 8 },
  section: { color: '#142d4e', fontSize: 18, fontWeight: '700', marginTop: 26, marginBottom: 8 },
});

