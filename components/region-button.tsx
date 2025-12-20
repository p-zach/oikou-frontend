import "@/global.css";
import { Image, ImageSourcePropType, Pressable } from "react-native";

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
      onPress={onPress}
    >
      <Image 
        className="border-2 border-slate-500 rounded-xl"
        source={images[region]} 
      />
    </Pressable>
  )
}