import { AppText, ThemeToggle } from "@/components";
import { getOrCreateLocalUUID } from "@/utils/local-uuid";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

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
    <ScrollView className="w-full p-6 bg-background">
      <View className="flex-col gap-8">
        <AppText className="text-4xl">Profile</AppText>
        <AppText className="text-2xl">Theme Preference</AppText>
        <ThemeToggle />
        <AppText className="text-2xl">Local UUID</AppText>
        <AppText>{localUUID}</AppText>
      </View>
    </ScrollView>
  );
}
