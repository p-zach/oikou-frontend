import { useAsyncStorageState } from "@/hooks/use-async-storage-state";
import { useColorScheme } from "nativewind";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { Appearance } from "react-native";

type ThemeMode = "light" | "dark" | "system";

const ThemeContext = createContext({ theme: "light" as ThemeMode, setTheme: (t: ThemeMode) => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const storage = useAsyncStorageState("darkMode", "system" as ThemeMode);

  const { setColorScheme } = useColorScheme();

  // Apply scheme whenever stored value changes
  useEffect(() => {
    if (!storage.isLoading) {
      const system = Appearance.getColorScheme();
      const applied = storage.value === "system" ? system as ThemeMode : storage.value;
      setColorScheme(applied);
    }
  }, [storage.value, storage.isLoading, setColorScheme]);

  if (storage.isLoading) {
    return null; // or a loading spinner
  }

  return (
    <ThemeContext value={{ theme: storage.value, setTheme: storage.setValue }}>
      {children}
    </ThemeContext>
  );
}

export function useThemePreference() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemePreference must be used inside ThemeProvider");
  }
  return context;
}