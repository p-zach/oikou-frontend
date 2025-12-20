import RegionButton from "@/components/region-button";
import "@/global.css";
import { ScrollView, View } from "react-native";

const lessons = [
  "europe",
  "americas",
  "africa",
]

export default function Home() {
  return (
    <View className="flex-1 items-center">
      <ScrollView className="w-full">
        <View className="flex-1 items-center">
          {lessons.map((region =>
            <View key={`view-${region}`} className="my-4 mx-10">
              <RegionButton region={region} key={region} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
