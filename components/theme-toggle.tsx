import Button from "./button";
import { useThemePreference } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, setTheme } = useThemePreference();
  return (
    <Button onPress={() => setTheme(theme === "dark" ? "light" : "dark")} text={theme === "dark" ? "Switch to Light" : "Switch to Dark"} />
  );
}
