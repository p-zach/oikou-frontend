import { mock_continue_learning } from "@/assets/mocks/continue-learning";
import Button from "@/components/button";
import "@/global.css";
import { AllLessons, LessonMetadata } from "@/types/lessons";
import { AllRegions, Region, RegionMetadata } from "@/types/regions";
import { router } from 'expo-router';
import { ImageSourcePropType, ScrollView, Text, View } from "react-native";

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
    <ScrollView className="w-full p-4 bg-background">
      <View className="flex-col gap-4">
        <Text className="font-lexend-regular text-4xl text-textPrimary">
          Home
        </Text>
        <Button 
          text={
            `Continue: \
${RegionMetadata[mock_continue_learning.region].title} - \
${LessonMetadata[mock_continue_learning.lesson_type].title}`
          }
          onPress={onContinueLearningButtonPress} 
          className="self-start"
        />
        <Text className="font-lexend-regular text-3xl text-textPrimary">
          Regions
        </Text>
        <View className="md:flex-row gap-4">
          {AllRegions.map((region =>
            <View key={`view-${region}`} className="">
              <Button 
                text={RegionMetadata[region].title} 
                onPress={() => onRegionButtonPress(region)} 
                image={images[region]} 
              />
            </View>
          ))}
        </View>
        <Text className="font-lexend-regular text-3xl text-textPrimary">
          Practice (all regions)
        </Text>
        <View className="md:flex-row gap-4">
          {AllLessons.map((option =>
            <View key={`view-${option}`} className="">
              <Button 
                text={LessonMetadata[option].title} 
                onPress={() => alert('Practice button pressed')} 
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
