import { mock_region_data } from "@/assets/mocks/region-data";
import Button from "@/components/button";
import CloseButton from "@/components/close-button";
import { getAllLessonSubjects, getLessonTitle, LessonSubject } from "@/domain/lesson";
import { getRegionTitle, Region } from "@/domain/region";
import "@/global.css";
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
            { getRegionTitle(r) }
          </Text>
          <CloseButton route={{ pathname: "../home" }} />
        </View>
        <View className="md:flex-row gap-4">
          {getAllLessonSubjects().map((lesson_type) =>
            <View key={`view-${lesson_type}`}>
              <Button 
                text={
`${getLessonTitle(lesson_type)}: \
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
