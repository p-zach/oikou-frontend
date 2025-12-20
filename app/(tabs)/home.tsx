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
    <View className="flex-1 justify-center items-center">
      <ScrollView>
        {lessons.map((region =>
          <View key={`view-${region}`} className="my-4 mx-10">
            <RegionButton region={region} key={region} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
