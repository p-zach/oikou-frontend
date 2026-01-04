import { mock_region_data } from "@/assets/mocks/region_data";
import Button from "@/components/button";
import "@/global.css";
import * as Regions from "@/types/regions";
import { router } from 'expo-router';
import { ImageSourcePropType, ScrollView, Text, View } from "react-native";

const practice_options = [
  "🚩 Flags",
  "🏛 Capitals",
]

const images: Record<Regions.Region, ImageSourcePropType> = {
  'europe': require('@/assets/images/europe.png'),
  'americas': require('@/assets/images/americas.png'),
  'africa': require('@/assets/images/africa.png'),
}

export default function Home() {
  const onRegionButtonPress = (region: Regions.Region) => {
    router.push({
      pathname: "/region",
      params: { 
        r: region,
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
          text="Continue: Europe - Capitals"
          onPress={() => alert('Continue learning button pressed')} 
          className="self-start"
        />
        <Text className="font-lexend-regular text-3xl text-textPrimary">
          Regions
        </Text>
        <View className="md:flex-row gap-4">
          {Regions.AllRegions.map((region =>
            <View key={`view-${region}`} className="">
              <Button 
                text={mock_region_data[region].title} 
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
          {practice_options.map((option =>
            <View key={`view-${option}`} className="">
              <Button text={option} onPress={() => alert('Practice button pressed')} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
