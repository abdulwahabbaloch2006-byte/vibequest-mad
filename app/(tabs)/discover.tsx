import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, View } from 'react-native';
import { ThemedText, ThemedView } from '@/components/Themed';

type Post = { userId: number; id: number; title: string; body: string };
const endpoint = 'https://jsonplaceholder.typicode.com/posts?_limit=12';

export default function DiscoverScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    let active = true;
    axios.get<Post[]>(endpoint, { timeout: 12000 })
      .then((response) => { if (active) setPosts(response.data); })
      .catch(() => { if (active) setError('Could not load posts. Check your connection and try again.'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [reloadKey]);

  return <ThemedView style={styles.page}>
    <FlatList data={posts} keyExtractor={(item) => String(item.id)} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}
      ListHeaderComponent={<><ThemedText style={styles.kicker}>Explore sample posts</ThemedText><ThemedText style={styles.title}>Discover</ThemedText><ThemedText style={styles.subtitle}>Sample posts loaded from a public API.</ThemedText><View style={styles.apiBadge}><View style={styles.dot} /><ThemedText style={styles.apiText}>JSONPlaceholder · Sample data</ThemedText></View><ThemedText style={styles.section}>Posts</ThemedText></>}
      ListEmptyComponent={loading ? <View style={styles.state}><ActivityIndicator color="#214e80" size="large" /><ThemedText style={styles.stateText}>Loading posts...</ThemedText></View> : error ? <View style={styles.state}><ThemedText style={styles.errorTitle}>Something went wrong</ThemedText><ThemedText style={styles.stateText}>{error}</ThemedText><Pressable style={styles.retry} onPress={() => { setLoading(true); setError(''); setReloadKey((current) => current + 1); }}><ThemedText style={styles.retryText}>Try again</ThemedText></Pressable></View> : undefined}
      renderItem={({ item, index }) => <View style={styles.card}><View style={styles.cardTop}><ThemedText style={styles.cardLabel}>Post {String(index + 1).padStart(2, '0')}</ThemedText><ThemedText style={styles.sparkle}>✦</ThemedText></View><ThemedText style={styles.cardTitle}>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</ThemedText><ThemedText style={styles.body}>{item.body.charAt(0).toUpperCase() + item.body.slice(1)}</ThemedText><ThemedText style={styles.source}>Post #{item.id}</ThemedText></View>}
    />
  </ThemedView>;
}

const styles = StyleSheet.create({ page: { flex: 1, backgroundColor: '#f3f6fa' }, content: { width: '100%', maxWidth: 760, alignSelf: 'center', padding: 22, paddingTop: 30, paddingBottom: 36 }, kicker: { color: '#516781', fontSize: 13, fontWeight: '600' }, title: { color: '#142d4e', fontSize: 29, fontWeight: '800', marginTop: 5 }, subtitle: { color: '#566578', fontSize: 14, marginTop: 5 }, apiBadge: { alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 7, backgroundColor: '#e9f6ee', paddingHorizontal: 11, paddingVertical: 8, borderRadius: 20, marginTop: 17 }, dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#53a775' }, apiText: { color: '#477c5c', fontSize: 9, fontWeight: '800', letterSpacing: 1 }, section: { color: '#142d4e', fontSize: 17, fontWeight: '800', marginTop: 25, marginBottom: 13 }, card: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#dce4ee', borderRadius: 17, padding: 17, marginBottom: 11 }, cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, cardLabel: { color: '#516781', fontSize: 9, fontWeight: '800', letterSpacing: 1.2 }, sparkle: { color: '#c2a85b', fontSize: 16 }, cardTitle: { color: '#142d4e', fontSize: 16, lineHeight: 23, fontWeight: '700', marginTop: 12, textTransform: 'capitalize' }, body: { color: '#566578', fontSize: 13, lineHeight: 21, marginTop: 6 }, source: { color: '#62768d', fontSize: 9, fontWeight: '700', letterSpacing: 1, marginTop: 14 }, state: { alignItems: 'center', padding: 24, backgroundColor: '#fff', borderRadius: 16, gap: 12 }, stateText: { color: '#566578', textAlign: 'center', fontSize: 13, lineHeight: 20 }, errorTitle: { color: '#142d4e', fontSize: 16, fontWeight: '700' }, retry: { borderRadius: 12, backgroundColor: '#214e80', paddingHorizontal: 18, paddingVertical: 10 }, retryText: { color: '#fff', fontWeight: '700' } });
