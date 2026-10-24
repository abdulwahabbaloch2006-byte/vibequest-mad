import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

const ink = '#101522';
const muted = '#8590a3';
const checklist = [
  ['01', 'Start with one clear goal', 'Write what this screen should help someone do.'],
  ['02', 'Use a familiar pattern', 'Keep navigation consistent across the whole app.'],
  ['03', 'Make touch targets easy', 'Leave enough space between actions.'],
  ['04', 'Check light and dark themes', 'Keep text readable in both color schemes.'],
];

export default function GuideScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>FIELD GUIDE · 04 MIN READ</Text>
      <Text style={styles.title}>Before you ship</Text>
      <Text style={styles.subtitle}>A quick checklist for a screen that feels finished.</Text>

      <View style={styles.banner}>
        <View style={styles.bannerTop}><Text style={styles.bannerIcon}>✦</Text><Text style={styles.bannerTag}>BUILD BETTER</Text></View>
        <Text style={styles.bannerTitle}>Details make the difference.</Text>
        <Text style={styles.bannerCopy}>Check the small things before sharing your next build.</Text>
        <View style={styles.bannerLine} />
        <Text style={styles.bannerFooter}>MOBILE APP DEVELOPMENT</Text>
      </View>

      <Text style={styles.section}>Your checklist</Text>
      {checklist.map(([number, title, copy], index) => (
        <View key={number} style={styles.step}>
          <View style={[styles.stepNumber, index === 0 && styles.stepNumberActive]}><Text style={[styles.stepNumberText, index === 0 && styles.stepNumberTextActive]}>{number}</Text></View>
          <View style={styles.stepBody}><Text style={styles.stepTitle}>{title}</Text><Text style={styles.stepCopy}>{copy}</Text></View>
        </View>
      ))}
      <View style={styles.note}><Text style={styles.noteIcon}>✓</Text><Text style={styles.noteText}>A consistent design system makes every new screen feel like part of the same app.</Text></View>
      <View style={{ height: 18 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f6f5f2' },
  content: { paddingHorizontal: 22, paddingTop: 26, paddingBottom: 28 },
  eyebrow: { color: '#8590a3', fontSize: 9, fontWeight: '800', letterSpacing: 1.4 },
  title: { color: ink, fontSize: 29, fontWeight: '800', letterSpacing: -1, marginTop: 7 },
  subtitle: { color: muted, fontSize: 13, lineHeight: 19, marginTop: 7, marginBottom: 20 },
  banner: { backgroundColor: ink, borderRadius: 23, padding: 19, minHeight: 204, justifyContent: 'center' },
  bannerTop: { flexDirection: 'row', alignItems: 'center', gap: 9, marginBottom: 17 },
  bannerIcon: { color: '#b8a5ff', fontSize: 19 },
  bannerTag: { color: '#c5baff', fontSize: 9, fontWeight: '800', letterSpacing: 1.5 },
  bannerTitle: { color: '#fff', fontSize: 22, fontWeight: '800', letterSpacing: -0.5 },
  bannerCopy: { color: '#bdc4d0', fontSize: 12, lineHeight: 18, marginTop: 7, maxWidth: 270 },
  bannerLine: { height: 1, backgroundColor: '#303747', marginTop: 19, marginBottom: 11 },
  bannerFooter: { color: '#8993a4', fontSize: 8, fontWeight: '800', letterSpacing: 1.3 },
  section: { color: ink, fontSize: 17, fontWeight: '800', marginTop: 24, marginBottom: 8 },
  step: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 13, borderBottomColor: '#e7e6e2', borderBottomWidth: 1 },
  stepNumber: { width: 32, height: 32, borderRadius: 11, backgroundColor: '#e9e7ef', alignItems: 'center', justifyContent: 'center' },
  stepNumberActive: { backgroundColor: '#b8a5ff' },
  stepNumberText: { color: '#716b82', fontSize: 9, fontWeight: '800' },
  stepNumberTextActive: { color: '#342954' },
  stepBody: { flex: 1, marginLeft: 12, paddingTop: 1 },
  stepTitle: { color: ink, fontSize: 12, fontWeight: '800' },
  stepCopy: { color: muted, fontSize: 10, lineHeight: 15, marginTop: 4 },
  note: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#def3e9', borderRadius: 17, padding: 14, marginTop: 17 },
  noteIcon: { color: '#3d795e', fontSize: 17, fontWeight: '900' },
  noteText: { flex: 1, color: '#315140', fontSize: 11, lineHeight: 16, fontWeight: '600' },
});
