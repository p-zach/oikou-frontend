import ThemeToggle from "@/components/theme-toggle";
import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-textPrimary">Profile</Text>
      <ThemeToggle />
    </View>
  );
}
