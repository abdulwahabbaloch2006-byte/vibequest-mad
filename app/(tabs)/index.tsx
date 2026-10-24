import { ScrollView, StyleSheet, Pressable } from 'react-native';

import { Text, View } from '@/components/Themed';

const ink = '#101522';
const muted = '#8590a3';
const lilac = '#b8a5ff';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.topline}>
        <View>
          <Text style={styles.eyebrow}>MOBILE APP DEVELOPMENT</Text>
          <Text style={styles.brand}>BuildBuddy</Text>
        </View>
        <View style={styles.avatar}><Text style={styles.avatarText}>A</Text></View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.heroLabel}>YOUR WORKSPACE</Text>
        <Text style={styles.heroTitle}>Small steps.{"\n"}Great apps.</Text>
        <Text style={styles.heroCopy}>Plan your next screen and keep your build moving.</Text>
        <View style={styles.heroFooter}>
          <View style={styles.progressTrack}><View style={styles.progress} /></View>
          <Text style={styles.progressText}>72% complete</Text>
        </View>
        <View style={styles.orbOne} /><View style={styles.orbTwo} />
      </View>

      <View style={styles.sectionHead}><Text style={styles.sectionTitle}>Today</Text><Text style={styles.sectionHint}>SPRINT 02</Text></View>
      <View style={styles.statsRow}>
        <View style={styles.statCard}><Text style={styles.statNumber}>04</Text><Text style={styles.statLabel}>SCREENS</Text></View>
        <View style={styles.statCard}><Text style={styles.statNumber}>08</Text><Text style={styles.statLabel}>COMPONENTS</Text></View>
        <View style={styles.statCard}><Text style={styles.statNumber}>02</Text><Text style={styles.statLabel}>TO REVIEW</Text></View>
      </View>

      <View style={styles.sectionHead}><Text style={styles.sectionTitle}>Keep building</Text><Text style={styles.sectionHint}>VIEW ALL</Text></View>
      <Pressable style={styles.taskCard}>
        <View style={styles.taskIcon}><Text style={styles.taskIconText}>✦</Text></View>
        <View style={styles.taskBody}><Text style={styles.taskTitle}>Design your next screen</Text><Text style={styles.taskSub}>Layout · 20 min</Text></View>
        <Text style={styles.chevron}>›</Text>
      </Pressable>
      <Pressable style={styles.taskCard}>
        <View style={[styles.taskIcon, styles.taskIconMint]}><Text style={styles.taskIconText}>⌘</Text></View>
        <View style={styles.taskBody}><Text style={styles.taskTitle}>Review shared components</Text><Text style={styles.taskSub}>Code quality · 15 min</Text></View>
        <Text style={styles.chevron}>›</Text>
      </Pressable>
      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f6f5f2' },
  content: { paddingHorizontal: 22, paddingTop: 20, paddingBottom: 28 },
  topline: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 },
  eyebrow: { color: muted, fontSize: 10, fontWeight: '700', letterSpacing: 1.7 },
  brand: { color: ink, fontSize: 28, lineHeight: 34, fontWeight: '800', letterSpacing: -1 },
  avatar: { width: 42, height: 42, borderRadius: 16, backgroundColor: '#e6defc', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#645492', fontSize: 15, fontWeight: '800' },
  hero: { backgroundColor: ink, borderRadius: 26, padding: 23, minHeight: 222, overflow: 'hidden', justifyContent: 'center' },
  heroLabel: { color: '#c0b4f5', fontSize: 10, fontWeight: '800', letterSpacing: 1.6 },
  heroTitle: { color: '#fff', fontSize: 32, lineHeight: 36, fontWeight: '800', letterSpacing: -1.1, marginTop: 12 },
  heroCopy: { color: '#bac1ce', fontSize: 13, lineHeight: 19, marginTop: 10, maxWidth: 220 },
  heroFooter: { flexDirection: 'row', alignItems: 'center', gap: 9, marginTop: 21 },
  progressTrack: { width: 92, height: 5, borderRadius: 5, backgroundColor: '#343b4a' },
  progress: { width: '72%', height: 5, borderRadius: 5, backgroundColor: lilac },
  progressText: { color: '#e6e3ee', fontSize: 10, fontWeight: '600' },
  orbOne: { position: 'absolute', width: 148, height: 148, borderRadius: 80, backgroundColor: '#a290e8', opacity: 0.16, right: -48, top: -30 },
  orbTwo: { position: 'absolute', width: 84, height: 84, borderRadius: 48, borderWidth: 1, borderColor: '#b8a5ff', right: 15, bottom: -40, opacity: 0.7 },
  sectionHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25, marginBottom: 12 },
  sectionTitle: { color: ink, fontSize: 17, fontWeight: '800', letterSpacing: -0.3 },
  sectionHint: { color: muted, fontSize: 9, fontWeight: '800', letterSpacing: 1.3 },
  statsRow: { flexDirection: 'row', gap: 9 },
  statCard: { flex: 1, backgroundColor: '#fff', borderRadius: 17, paddingVertical: 14, paddingHorizontal: 12, borderWidth: 1, borderColor: '#edecf0' },
  statNumber: { color: ink, fontSize: 23, fontWeight: '800', letterSpacing: -0.8 },
  statLabel: { color: muted, fontSize: 8, fontWeight: '800', letterSpacing: 0.7, marginTop: 5 },
  taskCard: { minHeight: 72, flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 18, backgroundColor: '#fff', borderColor: '#edecf0', borderWidth: 1, marginBottom: 9 },
  taskIcon: { width: 42, height: 42, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee8ff' },
  taskIconMint: { backgroundColor: '#def3e9' },
  taskIconText: { color: '#6e5ba6', fontSize: 20, fontWeight: '700' },
  taskBody: { flex: 1, marginLeft: 12 },
  taskTitle: { color: ink, fontSize: 12, fontWeight: '700' },
  taskSub: { color: muted, fontSize: 10, marginTop: 5 },
  chevron: { color: '#a1a7b2', fontSize: 25, paddingHorizontal: 4 },
  bottomSpace: { height: 10 },
});
