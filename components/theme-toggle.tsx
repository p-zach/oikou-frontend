import { Button } from "@/components";
import { useColorScheme } from "nativewind";

export default function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <Button onPress={toggleTheme} text={colorScheme === "dark" ? "Switch to Light" : "Switch to Dark"} />
  );
}
