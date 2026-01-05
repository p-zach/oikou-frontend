import { mock_region_data } from "@/assets/mocks/region-data";
import Button from "@/components/button";
import "@/global.css";
import * as Lessons from "@/types/lessons";
import * as Regions from "@/types/regions";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function RegionMenu() {
  const { r } = useLocalSearchParams<{ r: Regions.Region }>();

  const onLessonButtonPressed = (t: Lessons.LessonType) => {
    router.push({
      pathname: "/lesson",
      params: { 
        r: r,
        t: t,
      }
    })
  }

  return (
    <ScrollView className="w-full p-4 bg-background">
      <View className="flex-col gap-4">
        <Text className="font-lexend-regular text-4xl text-textPrimary">
          { Regions.RegionMetadata[r].title }
        </Text>
        <View className="md:flex-row gap-4">
          {Lessons.AllLessons.map((lesson_type) =>
            <View key={`view-${lesson_type}`}>
              <Button 
                text={
`${Lessons.LessonMetadata[lesson_type].title}: \
${(mock_region_data[r].mastery[lesson_type] * 100).toFixed(0)}%`
                }
                onPress={() => onLessonButtonPressed(lesson_type)}
              />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
