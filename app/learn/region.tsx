import { AppText, Button, CloseButton } from "@/components";
import { getAllLessonSubjects, getLessonTitle, LessonSubject } from "@/domain/lesson";
import { getRegionTitle, Region } from "@/domain/region";
import { RegionSubjectMastery } from "@/domain/user";
import "@/global.css";
import { getCssVariableValue } from "@/utils/css";
import { getMasterySummary } from "@/utils/mastery-api";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Bar } from "react-native-progress";

export default function RegionMenu() {
  const { r } = useLocalSearchParams<{ r: Region }>();

  const [mastery, setMastery] = useState<Record<LessonSubject, RegionSubjectMastery> | null>(null);

  const onLessonButtonPressed = (t: LessonSubject) => {
    // TODO: Implement flags and neighbors lesson types
    if (t === "flags" || t === "neighbors") {
      alert(`${getLessonTitle(t)} lessons are not implemented yet! Try Capitals.`)
      return;
    }

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
    <ScrollView className="w-full p-6 bg-background">
      <View className="w-full flex-col gap-8">
        <View className="w-full flex-row justify-between">
          <AppText className="text-4xl">
            { getRegionTitle(r) }
          </AppText>
          <CloseButton route={{ pathname: "../home" }} />
        </View>
        <View className="grid grid-cols-2 gap-8">
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
                  color={getCssVariableValue('--text-secondary')}
                />
              </Button>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
