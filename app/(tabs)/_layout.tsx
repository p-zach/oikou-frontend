import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const background = "rgb(var(--surface))";
  const active = "rgb(var(--primary))";
  const inactive = "rgb(var(--text-secondary))";

  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: background },
        tabBarActiveTintColor: active,
        tabBarInactiveTintColor: inactive,
      }}>
      <Tabs.Screen name="home" options={{ title: "", headerShown: false, tabBarIcon: (_) => <Ionicons name="home" size={24} color="black" /> }} />
      <Tabs.Screen name="profile" options={{ title: "", headerShown: false, tabBarIcon: (_) => <Ionicons name="person-circle" size={24} color="black" />}} />
    </Tabs>
  );
}
