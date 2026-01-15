import ThemeToggle from "@/components/theme-toggle";
import { getOrCreateLocalUUID } from "@/utils/local-uuid";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Profile() {
  const [localUUID, setLocalUUID] = useState<string | null>(null);

  useEffect(() => {
    const fetchUUID = async () => {
      const uuid = await getOrCreateLocalUUID();
      setLocalUUID(uuid);
    };
    fetchUUID();
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-textPrimary">Profile</Text>
      <ThemeToggle />
      <Text className="text-textPrimary mt-4">Your local UUID: {localUUID}</Text>
    </View>
  );
}
