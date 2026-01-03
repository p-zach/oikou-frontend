import ContinueLearningButton from "@/components/continue-learning-button";
import PracticeButton from "@/components/practice-button";
import RegionButton from "@/components/region-button";
import "@/global.css";
import * as Region from "@/types/regions";
import { ScrollView, Text, View } from "react-native";

const practice_options = [
  "🚩 Flags",
  "🏛 Capitals",
]

export default function Home() {
  return (
    <ScrollView className="w-full p-4 bg-background">
      <View className="flex-col gap-4">
        <Text className="font-lexend-regular text-4xl text-textPrimary">
          Home
        </Text>
        <ContinueLearningButton />
        <Text className="font-lexend-regular text-3xl text-textPrimary">
          Regions
        </Text>
        <View className="md:flex-row gap-4">
          {Region.AllRegions.map((region =>
            <View key={`view-${region}`} className="">
              <RegionButton region={region} />
            </View>
          ))}
        </View>
        <Text className="font-lexend-regular text-3xl text-textPrimary">
          Practice (all regions)
        </Text>
        <View className="md:flex-row gap-4">
          {practice_options.map((option =>
            <View key={`view-${option}`} className="">
              <PracticeButton practice_text={option} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
