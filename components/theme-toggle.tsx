import { View } from "react-native";
import Button from "./button";
import { useThemePreference } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, setTheme } = useThemePreference();
  return (
    <View className="grid grid-cols-3 gap-4">
      <Button onPress={() => setTheme("light")} text={"Light"} disabled={theme === "light"} />
      <Button onPress={() => setTheme("dark")} text={"Dark"} disabled={theme === "dark"} />
      <Button onPress={() => setTheme("system")} text={"System"} disabled={theme === "system"} />
    </View>
    
  );
}
