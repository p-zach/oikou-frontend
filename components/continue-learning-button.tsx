import '@/global.css';
import { Pressable, Text } from 'react-native';

export default function ContinueLearningButton() {
  const onPress = () => {
    alert('Continue learning button pressed!');
  };

  return (
    <Pressable
      className="bg-primary rounded-xl p-3 self-start"
      onPress={onPress}
    >
      <Text
        className="font-lexend-regular text-lg text-textPrimary"
      >Continue: Europe - Capitals</Text>
    </Pressable>
  )
}