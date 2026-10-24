import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet } from 'react-native';
import { ThemedText, ThemedView } from '@/components/Themed';

const tasks = [
  'Go for a short walk',
  'Drink a glass of water',
  'Tell someone a kind thing',
];

export default function TasksScreen() {
  const [done, setDone] = useState<string[]>([]);
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <ThemedText style={styles.title}>Daily Tasks</ThemedText>
      <ThemedText style={styles.subtitle}>Pick a small activity and tap to complete it.</ThemedText>
      {tasks.map((task) => {
        const complete = done.includes(task);
        return (
          <Pressable key={task} onPress={() => setDone((current) => complete ? current.filter((item) => item !== task) : [...current, task])}>
            <ThemedView style={[styles.row, complete && styles.completed]}>
              <ThemedText style={styles.check}>{complete ? '✓' : '○'}</ThemedText>
              <ThemedText style={styles.task}>{task}</ThemedText>
            </ThemedView>
          </Pressable>
        );
      })}
      <ThemedText style={styles.counter}>{done.length} of {tasks.length} complete</ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f7f5ff' },
  content: { padding: 24, paddingTop: 36 },
  title: { color: '#30245d', fontSize: 28, fontWeight: '800' },
  subtitle: { color: '#706a7d', fontSize: 15, marginTop: 6, marginBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 14, borderWidth: 1, borderColor: '#e9e4f4', padding: 16, marginBottom: 10 },
  completed: { backgroundColor: '#e9f6ee' },
  check: { color: '#6a56b1', fontSize: 20, width: 32 },
  task: { color: '#302b39', fontSize: 16 },
  counter: { color: '#706a7d', fontSize: 14, marginTop: 14 },
});

