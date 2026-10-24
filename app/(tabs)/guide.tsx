import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText, ThemedView } from '@/components/Themed';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <ThemedText style={styles.title}>About VibeQuest</ThemedText>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.body}>VibeQuest is a simple daily activity app made with Expo and React Native.</ThemedText>
        <ThemedText style={styles.body}>It has three screens: Home, Tasks, and About. Complete small activities and build a positive routine.</ThemedText>
      </ThemedView>
      <ThemedText style={styles.note}>Mobile App Development · Assignment 02</ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f7f5ff' },
  content: { padding: 24, paddingTop: 36 },
  title: { color: '#30245d', fontSize: 28, fontWeight: '800', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 18, padding: 20, borderWidth: 1, borderColor: '#e9e4f4' },
  body: { color: '#625d6b', fontSize: 16, lineHeight: 24, marginBottom: 12 },
  note: { color: '#706a7d', fontSize: 13, marginTop: 20 },
});

