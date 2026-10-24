import { ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Text, View } from '@/components/Themed';

const steps = [
  { icon: '🎲', title: 'Pick a tiny quest', detail: 'Choose something silly, kind, or curious.' },
  { icon: '✨', title: 'Make it your own', detail: 'There is no wrong way to complete a good-vibes mission.' },
  { icon: '🏅', title: 'Collect your XP', detail: 'Tap your quest when it is done and celebrate the win.' },
  { icon: '🌈', title: 'Come back tomorrow', detail: 'A new day means a fresh chance to have fun.' },
];

export default function GuideScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <Text style={styles.kicker}>THE VIBEQUEST PLAYBOOK</Text>
      <Text style={styles.title}>How to play<Text style={styles.titleDot}>?</Text></Text>
      <Text style={styles.subtitle}>Four easy steps. Zero pressure. Maximum good vibes.</Text>

      <LinearGradient colors={['#ffad89', '#ffd881']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.cover}>
        <Text style={styles.coverEmoji}>🪩</Text>
        <Text style={styles.coverTitle}>Make ordinary{ '\n' }days legendary.</Text>
        <Text style={styles.coverSub}>YOUR MINI GUIDE TO A BRIGHTER DAY</Text>
        <Text style={styles.coverSparkle}>✦</Text>
      </LinearGradient>

      <View style={styles.stepsHead}><Text style={styles.sectionTitle}>The whole game</Text><Text style={styles.badge}>EASY MODE</Text></View>
      {steps.map((step, index) => (
        <View key={step.title} style={styles.step}>
          <View style={[styles.number, index === 0 && styles.numberActive]}><Text style={styles.numberText}>0{index + 1}</Text></View>
          <View style={styles.stepBody}><Text style={styles.stepTitle}>{step.icon}  {step.title}</Text><Text style={styles.stepDetail}>{step.detail}</Text></View>
        </View>
      ))}
      <View style={styles.mantra}><Text style={styles.mantraEmoji}>💜</Text><Text style={styles.mantraText}>Your only competition is yesterday-you.</Text></View>
      <View style={{ height: 18 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f7f4ff' },
  content: { paddingHorizontal: 21, paddingTop: 25, paddingBottom: 24 },
  kicker: { color: '#89839e', fontSize: 9, fontWeight: '900', letterSpacing: 1.5 },
  title: { color: '#211c34', fontSize: 29, lineHeight: 36, fontWeight: '900', letterSpacing: -0.9, marginTop: 5 },
  titleDot: { color: '#fa8c7b' },
  subtitle: { color: '#858096', fontSize: 12, lineHeight: 18, marginTop: 5, marginBottom: 18 },
  cover: { minHeight: 218, borderRadius: 24, padding: 20, justifyContent: 'center', overflow: 'hidden' },
  coverEmoji: { fontSize: 34, marginBottom: 10 },
  coverTitle: { color: '#382a44', fontSize: 25, lineHeight: 28, fontWeight: '900', letterSpacing: -0.7 },
  coverSub: { color: '#7a5b5c', fontSize: 8, fontWeight: '900', letterSpacing: 1.1, marginTop: 13 },
  coverSparkle: { position: 'absolute', color: '#fff7db', fontSize: 72, right: 14, top: 14 },
  stepsHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 23, marginBottom: 8 },
  sectionTitle: { color: '#211c34', fontSize: 16, fontWeight: '900' },
  badge: { color: '#71688c', backgroundColor: '#eae4fb', overflow: 'hidden', borderRadius: 9, paddingHorizontal: 8, paddingVertical: 5, fontSize: 8, fontWeight: '900', letterSpacing: 0.8 },
  step: { flexDirection: 'row', alignItems: 'center', paddingVertical: 13, borderBottomColor: '#ece7f5', borderBottomWidth: 1 },
  number: { width: 37, height: 37, borderRadius: 13, backgroundColor: '#e9e4f4', alignItems: 'center', justifyContent: 'center' },
  numberActive: { backgroundColor: '#c9b9ff' },
  numberText: { color: '#655a84', fontSize: 9, fontWeight: '900' },
  stepBody: { flex: 1, marginLeft: 12 },
  stepTitle: { color: '#302941', fontSize: 11, fontWeight: '900' },
  stepDetail: { color: '#89839b', fontSize: 9, lineHeight: 14, marginTop: 4 },
  mantra: { flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#eee8ff', borderRadius: 16, padding: 14, marginTop: 16 },
  mantraEmoji: { fontSize: 18 },
  mantraText: { color: '#5d5278', flex: 1, fontSize: 10, fontWeight: '800' },
});
