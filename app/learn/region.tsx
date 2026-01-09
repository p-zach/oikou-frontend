import { mock_region_data } from "@/assets/mocks/region-data";
import Button from "@/components/button";
import CloseButton from "@/components/close-button";
import "@/global.css";
import { AllLessons, LessonMetadata, LessonSubject } from "@/types/lessons";
import { Region, RegionMetadata } from "@/types/regions";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function RegionMenu() {
  const { r } = useLocalSearchParams<{ r: Region }>();

  const onLessonButtonPressed = (t: LessonSubject) => {
    router.push({
      pathname: "/learn/lesson",
      params: { 
        r: r,
        t: t,
      }
    })
  }

  return (
    <ScrollView className="w-full p-4 bg-background">
      <View className="w-full flex-col gap-4">
        <View className="w-full flex-row justify-between">
          <Text className="font-lexend-regular text-4xl text-textPrimary">
            { RegionMetadata[r].title }
          </Text>
          <CloseButton route={{ pathname: "../home" }} />
        </View>
        <View className="md:flex-row gap-4">
          {AllLessons.map((lesson_type) =>
            <View key={`view-${lesson_type}`}>
              <Button 
                text={
`${LessonMetadata[lesson_type].title}: \
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
