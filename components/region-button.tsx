import { mock_region_data } from "@/assets/mocks/region_data";
import "@/global.css";
import * as Regions from "@/types/regions";
import { router } from 'expo-router';
import { Image, ImageSourcePropType, Pressable, Text } from "react-native";

const images: Record<Regions.Region, ImageSourcePropType> = {
  'europe': require('@/assets/images/europe.png'),
  'americas': require('@/assets/images/americas.png'),
  'africa': require('@/assets/images/africa.png'),
}

interface RegionButtonProps {
  region: Regions.Region;
}

export default function RegionButton({ region }: RegionButtonProps) {
  const onPress = () => {
    router.push({
      pathname: "/region",
      params: { 
        r: region,
      }
    })
  };

  return (
    <Pressable
      className="bg-primary rounded-xl items-center p-3"
      onPress={onPress}
    >
      <Text
        className="font-lexend-regular text-lg text-textPrimary mb-2"
      >{mock_region_data[region].title}</Text>
      <Image 
        className="rounded-xl"
        source={images[region]} 
      />
    </Pressable>
  )
}