import { mock_region_data } from "@/assets/mocks/region_data";
import LessonButton from "@/components/lesson-button";
import "@/global.css";
import type * as Lessons from "@/types/lessons";
import type * as Regions from "@/types/regions";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function RegionMenu() {
  const { r } = useLocalSearchParams<{ r: Regions.Region }>();

  return (
    <ScrollView className="w-full p-4 bg-background">
      <View className="flex-col gap-4">
        <Text className="font-lexend-regular text-4xl text-textPrimary">
          { mock_region_data[r].title }
        </Text>
        <View className="md:flex-row gap-4">
          {Object.keys(mock_region_data[r].mastery).map((lesson_type) =>
            <View key={`view-${lesson_type}`}>
              <LessonButton region={r} lesson_type={lesson_type as Lessons.LessonType} />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
