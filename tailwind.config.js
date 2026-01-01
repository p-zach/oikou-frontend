
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
        background: "rgb(var(--background))",
        surface: "rgb(var(--surface))",
        border: "rgb(var(--border))",

        textPrimary: "rgb(var(--text-primary))",
        textSecondary: "rgb(var(--text-secondary))",

        primary: "rgb(var(--primary))",
        primaryForeground: "rgb(var(--primary-foreground))",

        accent: "rgb(var(--accent))",
        destructive: "rgb(var(--destructive))",
      },
    },
  },
  plugins: [],
}