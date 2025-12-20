import "@/global.css";
import { capitalizeFirstLetter } from "@/scripts/strings";
import { Image, ImageSourcePropType, Pressable, Text } from "react-native";

const images: Record<string, ImageSourcePropType> = {
  'europe': require('@/assets/images/europe.png'),
  'americas': require('@/assets/images/americas.png'),
  'africa': require('@/assets/images/africa.png'),
}

interface RegionButtonProps {
  region: string;
}

export default function RegionButton({ region }: RegionButtonProps) {
  const onPress = () => {
    alert("You pressed " + region + "!");
  };

  return (
    <Pressable
      className="bg-slate-500 rounded-xl items-center p-3"
      onPress={onPress}
    >
      <Text
        className="font-lexend-regular text-lg text-white mb-2"
      >{capitalizeFirstLetter(region)}</Text>
      <Image 
        className="rounded-xl"
        source={images[region]} 
      />
    </Pressable>
  )
}