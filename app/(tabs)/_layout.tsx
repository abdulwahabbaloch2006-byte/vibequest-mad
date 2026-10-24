import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

const tint = '#7b63d1';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tint,
        tabBarInactiveTintColor: '#a09aae',
        tabBarStyle: styles.bar,
        tabBarLabelStyle: styles.label,
        tabBarItemStyle: styles.item,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Vibe',
          tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'house.fill', android: 'home', web: 'home' }} tintColor={color} size={21} />,
        }}
      />
      <Tabs.Screen
        name="quests"
        options={{
          title: 'Quests',
          tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'sparkles', android: 'casino', web: 'casino' }} tintColor={color} size={21} />,
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'Playbook',
          tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'book.fill', android: 'menu_book', web: 'menu_book' }} tintColor={color} size={21} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: { height: 76, paddingTop: 8, paddingBottom: 8, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#eee8fa', elevation: 0 },
  label: { fontSize: 9, fontWeight: '700' },
  item: { paddingTop: 1 },
});
