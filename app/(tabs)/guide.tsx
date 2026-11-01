import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText, ThemedView } from '@/components/Themed';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <ThemedText style={styles.title}>About VibeQuest</ThemedText>
      <ThemedText style={styles.intro}>A little structure for your everyday tasks.</ThemedText>
      <ThemedView style={styles.author}>
        <ThemedText style={styles.authorLabel}>Created by</ThemedText>
        <ThemedText style={styles.name}>Abdul Wahab</ThemedText>
        <ThemedText style={styles.course}>Mobile Application Development</ThemedText>
        <ThemedText style={styles.course}>University project · Assignment 03</ThemedText>
      </ThemedView>
      <ThemedView style={styles.section}>
        <ThemedText style={styles.heading}>Why I built it</ThemedText>
        <ThemedText style={styles.body}>VibeQuest helps you keep study goals, daily routines, and small personal tasks in one place. Add a task, give it a category, and mark it complete when you finish.</ThemedText>
      </ThemedView>
      <ThemedView style={styles.section}>
        <ThemedText style={styles.heading}>What you can do</ThemedText>
        <ThemedText style={styles.body}>Create, edit, and delete tasks. Search your list or filter it by category to find what you need.</ThemedText>
        <ThemedText style={styles.body}>Discover shows sample posts from a public API as part of this university assignment.</ThemedText>
      </ThemedView>
      <ThemedView style={styles.section}>
        <ThemedText style={styles.heading}>Your tasks stay on this device</ThemedText>
        <ThemedText style={styles.body}>Your list is saved locally and is not sent to the Discover API. It stays available after reopening the app, but does not sync to another device.</ThemedText>
        <ThemedText style={styles.body}>Use it for everyday tasks. Avoid saving passwords or sensitive personal details.</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f3f6fa' },
  content: { width: '100%', maxWidth: 760, alignSelf: 'center', padding: 24, paddingTop: 36, paddingBottom: 40 },
  title: { color: '#142d4e', fontSize: 28, fontWeight: '800' },
  intro: { color: '#566578', fontSize: 16, lineHeight: 24, marginTop: 8, marginBottom: 24 },
  author: { backgroundColor: '#142d4e', borderRadius: 16, padding: 24, marginBottom: 8 },
  authorLabel: { color: '#cbdcf0', fontSize: 14 },
  name: { color: '#fff', fontSize: 27, fontWeight: '700', marginTop: 6, marginBottom: 12 },
  course: { color: '#dce7f4', fontSize: 14, lineHeight: 22 },
  section: { backgroundColor: 'transparent', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#dce4ee' },
  heading: { color: '#142d4e', fontSize: 18, fontWeight: '700', marginBottom: 8 },
  body: { color: '#4b5f75', fontSize: 15, lineHeight: 24, marginTop: 4 },
});
