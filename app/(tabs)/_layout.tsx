import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "", headerShown: false, tabBarIcon: (_) => <Ionicons name="home" size={24} color="black" /> }} />
      <Tabs.Screen name="profile" options={{ title: "", headerShown: false, tabBarIcon: (_) => <Ionicons name="person-circle" size={24} color="black" />}} />
    </Tabs>
  );
}
