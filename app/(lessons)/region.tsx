import { mock_region_data } from "@/assets/mocks/region_data";
import Button from "@/components/button";
import "@/global.css";
import * as Regions from "@/types/regions";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function RegionMenu() {
  const { r } = useLocalSearchParams<{ r: Regions.Region }>();

  return (
    <ScrollView className="w-full p-4 bg-background">
      <View className="flex-col gap-4">
        <Text className="font-lexend-regular text-4xl text-textPrimary">
          { Regions.RegionMetadata[r].title }
        </Text>
        <View className="md:flex-row gap-4">
          {Object.keys(mock_region_data[r].mastery).map((lesson_type) =>
            <View key={`view-${lesson_type}`}>
              <Button text={lesson_type} onPress={() => alert('Lesson button pressed for ' + lesson_type + r)} />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
