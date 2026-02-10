import { AppText, ThemeToggle } from "@/components";
import { getOrCreateLocalUUID } from "@/utils/local-uuid";
import { useEffect, useState } from "react";
import { View } from "react-native";

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
      <AppText className="text-4xl">Profile</AppText>
      <ThemeToggle />
      <AppText className="mt-4">Your local UUID: {localUUID}</AppText>
    </View>
  );
}
