import { useColorScheme } from "nativewind";
import { Pressable, Text } from "react-native";

export default function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Pressable
      onPress={toggleTheme}
      className="px-4 py-2 bg-primary rounded-lg"
    >
      <Text className="text-primaryForeground text-center font-semibold">
        {colorScheme === "dark" ? "Switch to Light" : "Switch to Dark"}
      </Text>
    </Pressable>
  );
}
