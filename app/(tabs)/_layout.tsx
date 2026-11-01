import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

const tint = '#214e80';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: tint, tabBarInactiveTintColor: '#62768d', tabBarStyle: styles.bar, tabBarLabelStyle: styles.label }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'house.fill', android: 'home', web: 'home' }} tintColor={color} size={20} /> }} />
      <Tabs.Screen name="quests" options={{ title: 'Tasks', tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'checkmark.circle', android: 'check_circle', web: 'check_circle' }} tintColor={color} size={20} /> }} />
      <Tabs.Screen name="discover" options={{ title: 'Discover', tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'sparkles', android: 'auto_awesome', web: 'auto_awesome' }} tintColor={color} size={20} /> }} />
      <Tabs.Screen name="guide" options={{ title: 'About', tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'info.circle', android: 'info', web: 'info' }} tintColor={color} size={20} /> }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({ bar: { height: 68, paddingTop: 7, paddingBottom: 7, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#dce4ee', elevation: 0 }, label: { fontSize: 11, fontWeight: '600' } });
