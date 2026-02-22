
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "lexend-regular": ["Lexend-Regular"],
      },
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        border: "var(--border)",

        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",

        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",

        accent: "var(--accent)",
        destructive: "var(--destructive)",
      },
    },
  },
  plugins: [],
}