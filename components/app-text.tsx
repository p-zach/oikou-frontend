import { Text } from "react-native";

export default function AppText({ children, className }: { children: React.ReactNode; className?: string }) {
  return <Text className={`font-lexend-regular text-textPrimary ${className || ''}`}>
    {children}
  </Text>;
}