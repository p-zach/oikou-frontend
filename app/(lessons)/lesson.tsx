import "@/global.css";
import { capitalizeFirstLetter } from "@/scripts/strings";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Lesson() {
  const { l } = useLocalSearchParams<{ l: string }>();

  return (
    <View className="flex-1 items-center">
      <Text>
        Welcome to the lesson for {capitalizeFirstLetter(l)}!
      </Text>
    </View>
  );
}
