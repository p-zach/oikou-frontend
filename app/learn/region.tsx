import { AppText, Button, CloseButton } from "@/components";
import { getAllLessonSubjects, getLessonTitle, LessonSubject } from "@/domain/lesson";
import { getRegionTitle, Region } from "@/domain/region";
import { RegionSubjectMastery } from "@/domain/user";
import "@/global.css";
import { getColorFromCssVariable } from "@/utils/css";
import { getMasterySummary } from "@/utils/mastery-api";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Bar } from "react-native-progress";

export default function RegionMenu() {
  const { r } = useLocalSearchParams<{ r: Region }>();

  const [mastery, setMastery] = useState<Record<LessonSubject, RegionSubjectMastery> | null>(null);

  const onLessonButtonPressed = (t: LessonSubject) => {
    router.push({
      pathname: "/learn/lesson",
      params: { 
        r: r,
        t: t,
      }
    })
  }

  useEffect(() => {
    async function fetchMasteryData() {
      const regionSubjectMastery = await getMasterySummary([r], getAllLessonSubjects());
      if (regionSubjectMastery)
        setMastery(regionSubjectMastery[r]);
    }
    fetchMasteryData();
  }, [r]);

  return (
    <ScrollView className="w-full p-4 bg-background">
      <View className="w-full flex-col gap-4">
        <View className="w-full flex-row justify-between">
          <AppText className="text-4xl">
            { getRegionTitle(r) }
          </AppText>
          <CloseButton route={{ pathname: "../home" }} />
        </View>
        <View className="md:flex-row gap-4">
          {getAllLessonSubjects().map((lesson_type) =>
            <View key={`view-${lesson_type}`}>
              <Button 
                text={`${getLessonTitle(lesson_type)}`}
                onPress={() => onLessonButtonPressed(lesson_type)}
              >
                <Bar
                  className="mt-2"
                  progress={
                    mastery !== null && lesson_type in mastery 
                      ? mastery[lesson_type]["mastery"] 
                      : 0
                  } 
                  width={100} 
                  height={10}
                  color={getColorFromCssVariable('--text-primary')}
                />
              </Button>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
