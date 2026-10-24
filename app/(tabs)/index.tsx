import { useState } from 'react';
import { Animated, Pressable, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';

import { Text, View } from '@/components/Themed';

const quests = [
  { emoji: '🕺', title: 'Main character moment', detail: 'Dance to one song like no one is watching.', tag: '30 SEC', colors: ['#ff8b79', '#ffbf75'] as const },
  { emoji: '🔵', title: 'Color detective', detail: 'Find three blue things around you.', tag: 'LOOK AROUND', colors: ['#63a9ff', '#8bd7f2'] as const },
  { emoji: '💬', title: 'Good-vibes delivery', detail: 'Give someone a real compliment today.', tag: 'KINDNESS', colors: ['#aa8aff', '#df8de8'] as const },
  { emoji: '😂', title: 'Joke drop', detail: 'Make a friend laugh with your best joke.', tag: 'MAKE SOMEONE SMILE', colors: ['#ffbd57', '#ffe48a'] as const },
];

export default function HomeScreen() {
  const [questIndex, setQuestIndex] = useState(0);
  const [rolls, setRolls] = useState(0);
  const [scale] = useState(() => new Animated.Value(1));
  const quest = quests[questIndex];

  const rollQuest = () => {
    setQuestIndex((current) => (current + 1 + Math.floor(Math.random() * (quests.length - 1))) % quests.length);
    setRolls((current) => current + 1);
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Animated.sequence([
      Animated.spring(scale, { toValue: 0.94, useNativeDriver: true, speed: 26, bounciness: 12 }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 16, bounciness: 14 }),
    ]).start();
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.topline}>
        <View>
          <Text style={styles.kicker}>YOUR DAILY DOSE OF FUN</Text>
          <Text style={styles.brand}>VibeQuest<Text style={styles.brandDot}>.</Text></Text>
        </View>
        <View style={styles.avatar}><Text style={styles.avatarText}>😎</Text></View>
      </View>

      <LinearGradient colors={['#282044', '#171329']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.hero}>
        <View style={styles.heroTop}><View style={styles.liveDot} /><Text style={styles.heroKicker}>{"TODAY'S VIBE"}</Text><Text style={styles.heroDate}>DAY 03</Text></View>
        <Text style={styles.heroTitle}>Main character{"\n"}energy ✨</Text>
        <Text style={styles.heroCopy}>Tiny quests. Big mood. Make today a little more fun.</Text>
        <View style={styles.xpLine}><View style={styles.xpTrack}><View style={styles.xpFill} /></View><Text style={styles.xpText}>240 / 300 XP</Text></View>
        <View style={styles.orbitA} /><View style={styles.orbitB} /><Text style={styles.starOne}>✦</Text><Text style={styles.starTwo}>✦</Text>
      </LinearGradient>

      <View style={styles.sectionHead}><Text style={styles.sectionTitle}>Your quest drop</Text><Text style={styles.rollCount}>{rolls} ROLLS</Text></View>
      <Animated.View style={{ transform: [{ scale }] }}>
        <LinearGradient colors={quest.colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.questCard}>
          <View style={styles.questTop}><View style={styles.questEmoji}><Text style={styles.questEmojiText}>{quest.emoji}</Text></View><Text style={styles.questTag}>{quest.tag}</Text></View>
          <Text style={styles.questTitle}>{quest.title}</Text>
          <Text style={styles.questCopy}>{quest.detail}</Text>
          <Pressable onPress={rollQuest} style={({ pressed }) => [styles.rollButton, pressed && styles.pressed]}>
            <Text style={styles.rollButtonText}>🎲  Roll another quest</Text>
          </Pressable>
          <Text style={styles.cardSparkle}>✧</Text>
        </LinearGradient>
      </Animated.View>

      <View style={styles.sectionHead}><Text style={styles.sectionTitle}>Your streak is on</Text><Text style={styles.streakEmoji}>🔥</Text></View>
      <View style={styles.statsRow}>
        <View style={styles.statCard}><Text style={styles.statIcon}>⚡</Text><Text style={styles.statNumber}>03</Text><Text style={styles.statLabel}>DAY STREAK</Text></View>
        <View style={styles.statCard}><Text style={styles.statIcon}>🏆</Text><Text style={styles.statNumber}>240</Text><Text style={styles.statLabel}>TOTAL XP</Text></View>
        <View style={styles.statCard}><Text style={styles.statIcon}>🎯</Text><Text style={styles.statNumber}>06</Text><Text style={styles.statLabel}>QUESTS DONE</Text></View>
      </View>
      <View style={styles.footerNote}><Text style={styles.footerEmoji}>🌈</Text><Text style={styles.footerText}>No pressure. Just good vibes and one tiny win.</Text></View>
      <View style={{ height: 16 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#f7f4ff' },
  content: { paddingHorizontal: 21, paddingTop: 18, paddingBottom: 22 },
  topline: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  kicker: { color: '#89839e', fontSize: 9, fontWeight: '800', letterSpacing: 1.5 },
  brand: { color: '#211c34', fontSize: 28, lineHeight: 34, fontWeight: '900', letterSpacing: -1.1 },
  brandDot: { color: '#fa8c7b' },
  avatar: { width: 44, height: 44, borderRadius: 16, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ece5fa' },
  avatarText: { fontSize: 22 },
  hero: { minHeight: 207, borderRadius: 25, padding: 20, overflow: 'hidden', justifyContent: 'center' },
  heroTop: { flexDirection: 'row', alignItems: 'center', gap: 7 },
  liveDot: { width: 7, height: 7, borderRadius: 5, backgroundColor: '#8fe4c0' },
  heroKicker: { color: '#cec3fc', fontSize: 9, fontWeight: '800', letterSpacing: 1.4 },
  heroDate: { color: '#fff', backgroundColor: '#ffffff20', overflow: 'hidden', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 4, fontSize: 8, fontWeight: '800', letterSpacing: 1, marginLeft: 'auto' },
  heroTitle: { color: '#fff', fontSize: 29, lineHeight: 32, fontWeight: '900', letterSpacing: -0.8, marginTop: 14 },
  heroCopy: { color: '#c5bfd5', fontSize: 11, lineHeight: 17, marginTop: 7, maxWidth: 230 },
  xpLine: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 17 },
  xpTrack: { height: 6, width: 100, borderRadius: 6, backgroundColor: '#ffffff2e' },
  xpFill: { width: '80%', height: 6, borderRadius: 6, backgroundColor: '#b8a4ff' },
  xpText: { color: '#e1dcf1', fontSize: 9, fontWeight: '700' },
  orbitA: { position: 'absolute', width: 135, height: 135, borderRadius: 80, borderWidth: 1, borderColor: '#cab9ff55', right: -35, top: 28 },
  orbitB: { position: 'absolute', width: 90, height: 90, borderRadius: 50, backgroundColor: '#bda9ff12', right: 0, top: 50 },
  starOne: { position: 'absolute', color: '#ffca6b', fontSize: 22, right: 32, top: 26 },
  starTwo: { position: 'absolute', color: '#8de2c0', fontSize: 14, right: 93, top: 53 },
  sectionHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 21, marginBottom: 10 },
  sectionTitle: { color: '#211c34', fontSize: 16, fontWeight: '900', letterSpacing: -0.3 },
  rollCount: { color: '#918aa5', fontSize: 8, fontWeight: '900', letterSpacing: 1.2 },
  questCard: { minHeight: 223, borderRadius: 23, padding: 18, overflow: 'hidden' },
  questTop: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  questEmoji: { width: 42, height: 42, borderRadius: 15, backgroundColor: '#ffffff6e', alignItems: 'center', justifyContent: 'center' },
  questEmojiText: { fontSize: 22 },
  questTag: { color: '#3a3442', backgroundColor: '#ffffff70', overflow: 'hidden', borderRadius: 9, paddingHorizontal: 9, paddingVertical: 5, fontSize: 8, fontWeight: '900', letterSpacing: 0.8 },
  questTitle: { color: '#241c35', fontSize: 20, fontWeight: '900', letterSpacing: -0.5, marginTop: 12 },
  questCopy: { color: '#3f374c', fontSize: 11, lineHeight: 17, marginTop: 4, maxWidth: 260 },
  rollButton: { alignSelf: 'flex-start', backgroundColor: '#211c34', borderRadius: 13, paddingHorizontal: 14, paddingVertical: 10, marginTop: 15 },
  rollButtonText: { color: '#fff', fontSize: 10, fontWeight: '800' },
  pressed: { opacity: 0.82, transform: [{ scale: 0.98 }] },
  cardSparkle: { position: 'absolute', color: '#ffffff90', fontSize: 45, right: 17, bottom: 18 },
  streakEmoji: { fontSize: 16 },
  statsRow: { flexDirection: 'row', gap: 9 },
  statCard: { flex: 1, minHeight: 95, borderRadius: 17, backgroundColor: '#fff', padding: 11, borderWidth: 1, borderColor: '#eee8fa' },
  statIcon: { fontSize: 15 },
  statNumber: { color: '#29233e', fontSize: 19, lineHeight: 22, fontWeight: '900', marginTop: 4 },
  statLabel: { color: '#9992a9', fontSize: 7, fontWeight: '900', letterSpacing: 0.8, marginTop: 3 },
  footerNote: { flexDirection: 'row', alignItems: 'center', gap: 9, backgroundColor: '#eee8ff', borderRadius: 15, padding: 12, marginTop: 13 },
  footerEmoji: { fontSize: 17 },
  footerText: { color: '#655c79', flex: 1, fontSize: 10, fontWeight: '700' },
});


