import "@/global.css";
import * as Lessons from "@/types/lessons";
import * as Regions from "@/types/regions";
import { Pressable, Text } from "react-native";

interface LessonButtonProps {
  region: Regions.Region;
  lesson_type: Lessons.LessonType;
}

export default function LessonButton({ region, lesson_type }: LessonButtonProps) {
  const onPress = () => {
    // router.push({
    //   pathname: "/region",
    //   params: { 
    //     r: region,
    //   }
    // })
    alert(region + lesson_type);
  };

  return (
    <Pressable
      className="bg-primary rounded-xl items-center p-3"
      onPress={onPress}
    >
      <Text
        className="font-lexend-regular text-lg text-textPrimary mb-2"
      >{lesson_type}</Text>
    </Pressable>
  )
}