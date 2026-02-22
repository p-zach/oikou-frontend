import { mock_continue_learning } from "@/assets/mocks/continue-learning";
import { AppText, Button } from "@/components";
import { getAllLessonSubjects, getLessonTitle } from "@/domain/lesson";
import { getAllRegions, getRegionTitle, Region } from "@/domain/region";
import "@/global.css";
import { router } from 'expo-router';
import { ImageSourcePropType, ScrollView, View } from "react-native";

const images: Record<Region, ImageSourcePropType> = {
  europe: require('@/assets/images/europe.png'),
  americas: require('@/assets/images/americas.png'),
  africa: require('@/assets/images/africa.png'),
}

export default function Home() {
  const onRegionButtonPress = (region: Region) => {
    router.push({
      pathname: "/learn/region",
      params: { 
        r: region,
      }
    })
  };

  const onContinueLearningButtonPress = () => {
    router.push({
      pathname: "/learn/lesson",
      params: {
        r: mock_continue_learning.region,
        t: mock_continue_learning.lesson_type,
      }
    })
  };

  return (
    <ScrollView className="w-full p-6 bg-background">
      <View className="flex-col gap-8">
        <AppText className="text-4xl">
          Home
        </AppText>
        <Button 
          text={
            `Continue: \
${getRegionTitle(mock_continue_learning.region)} - \
${getLessonTitle(mock_continue_learning.lesson_type)}`
          }
          onPress={onContinueLearningButtonPress} 
          className="self-start"
        />
        <AppText className="text-3xl -mb-4">
          Regions
        </AppText>
        <ScrollView horizontal className="-mx-6 flex-row" contentContainerClassName="px-6 py-4 gap-8">
          {getAllRegions().map((region =>
            <View key={`view-${region}`} className="">
              <Button 
                text={getRegionTitle(region)} 
                onPress={() => onRegionButtonPress(region)} 
                image={images[region]}
              />
            </View>
          ))}
        </ScrollView>
        <AppText className="text-3xl">
          Practice (all regions)
        </AppText>
        <View className="gap-4 grid grid-cols-2">
          {getAllLessonSubjects().map((option =>
            <View key={`view-${option}`} className="">
              <Button 
                text={getLessonTitle(option)} 
                onPress={() => alert('Practice button pressed')} 
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
