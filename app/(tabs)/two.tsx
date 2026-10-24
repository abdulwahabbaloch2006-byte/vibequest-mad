import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

const ink = '#101522';
const muted = '#8590a3';

const blocks = [
  { number: '01', title: 'Navigation', description: 'Move between screens with a clear bottom tab bar.', color: '#eee8ff', icon: '⌘' },
  { number: '02', title: 'Reusable UI', description: 'Build cards and buttons once, then use them anywhere.', color: '#def3e9', icon: '▦' },
  { number: '03', title: 'App identity', description: 'Use one palette, icon, and splash to make it feel cohesive.', color: '#ffedda', icon: '✦' },
];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>YOUR TOOLKIT</Text>
      <Text style={styles.title}>Explore ideas</Text>
      <Text style={styles.subtitle}>Simple building blocks for a more thoughtful app.</Text>

      <View style={styles.feature}>
        <View style={styles.featureMark}><Text style={styles.featureMarkText}>↗</Text></View>
        <Text style={styles.featureLabel}>WEEKLY FOCUS</Text>
        <Text style={styles.featureTitle}>Make every tap feel clear.</Text>
        <Text style={styles.featureCopy}>Good navigation helps people know where they are and what to do next.</Text>
      </View>

      <Text style={styles.section}>Core principles</Text>
      {blocks.map((block) => (
        <View key={block.number} style={styles.card}>
          <View style={[styles.icon, { backgroundColor: block.color }]}><Text style={styles.iconText}>{block.icon}</Text></View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{block.title}</Text>
            <Text style={styles.cardCopy}>{block.description}</Text>
          </View>
          <Text style={styles.number}>{block.number}</Text>
        </View>
      ))}
      <View style={styles.tip}><Text style={styles.tipTitle}>DESIGN TIP</Text><Text style={styles.tipText}>Keep labels short and icons familiar so every tab is easy to scan.</Text></View>
      <View style={{ height: 18 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f6f5f2' },
  content: { paddingHorizontal: 22, paddingTop: 26, paddingBottom: 28 },
  eyebrow: { color: '#8590a3', fontSize: 10, fontWeight: '800', letterSpacing: 1.7 },
  title: { color: ink, fontSize: 30, fontWeight: '800', letterSpacing: -1, marginTop: 6 },
  subtitle: { color: muted, fontSize: 13, lineHeight: 19, marginTop: 7, marginBottom: 22, maxWidth: 290 },
  feature: { backgroundColor: '#b8a5ff', borderRadius: 24, padding: 20, minHeight: 192, justifyContent: 'center' },
  featureMark: { width: 35, height: 35, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.45)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  featureMarkText: { color: '#46386e', fontSize: 19, fontWeight: '800' },
  featureLabel: { color: '#574b7b', fontSize: 9, fontWeight: '800', letterSpacing: 1.3 },
  featureTitle: { color: '#231d35', fontSize: 22, fontWeight: '800', letterSpacing: -0.6, marginTop: 7 },
  featureCopy: { color: '#40375b', fontSize: 12, lineHeight: 18, marginTop: 7, maxWidth: 270 },
  section: { color: ink, fontSize: 17, fontWeight: '800', marginTop: 25, marginBottom: 12 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 13, borderRadius: 18, borderWidth: 1, borderColor: '#edecf0', marginBottom: 9, minHeight: 76 },
  icon: { width: 43, height: 43, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  iconText: { color: '#574b7b', fontSize: 19, fontWeight: '800' },
  cardBody: { flex: 1, marginLeft: 12, marginRight: 6 },
  cardTitle: { color: ink, fontSize: 12, fontWeight: '800' },
  cardCopy: { color: muted, fontSize: 10, lineHeight: 15, marginTop: 4 },
  number: { color: '#a2a8b4', fontSize: 9, fontWeight: '800' },
  tip: { marginTop: 7, backgroundColor: '#e8f0ec', borderRadius: 17, padding: 15 },
  tipTitle: { color: '#497260', fontSize: 9, fontWeight: '800', letterSpacing: 1.2 },
  tipText: { color: '#2f4b3d', fontSize: 12, lineHeight: 18, marginTop: 6 },
});
