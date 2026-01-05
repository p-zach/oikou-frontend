import "@/global.css";
import * as Lessons from "@/types/lessons";
import * as Regions from "@/types/regions";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text } from "react-native";

export default function RegionMenu() {
  const { r, t } = useLocalSearchParams<{ 
    r: Regions.Region, 
    t: Lessons.LessonType
  }>();

  return (
    <ScrollView className="w-full p-4 bg-background">
      <Text className="font-lexend-regular text-4xl text-textPrimary">
        { Regions.RegionMetadata[r].title }: { Lessons.LessonMetadata[t].title }
      </Text>
    </ScrollView>
  );
}
