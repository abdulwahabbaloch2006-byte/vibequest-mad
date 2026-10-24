import { SymbolView } from 'expo-symbols';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const tint = Colors.light.tint;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tint,
        tabBarInactiveTintColor: '#9aa0ad',
        tabBarStyle: styles.bar,
        tabBarLabelStyle: styles.label,
        tabBarItemStyle: styles.item,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'house.fill', android: 'home', web: 'home' }} tintColor={color} size={21} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'square.grid.2x2.fill', android: 'grid_view', web: 'grid_view' }} tintColor={color} size={21} />,
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'Field Guide',
          tabBarIcon: ({ color }) => <SymbolView name={{ ios: 'sparkles', android: 'lightbulb', web: 'lightbulb' }} tintColor={color} size={21} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: { height: 76, paddingTop: 8, paddingBottom: 8, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#edecf0', elevation: 0 },
  label: { fontSize: 9, fontWeight: '700' },
  item: { paddingTop: 1 },
});
