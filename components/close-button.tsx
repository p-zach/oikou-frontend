import '@/global.css';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';

export default function CloseButton() {
  const onPress = () => {
    router.back()
  }

  const { colorScheme } = useColorScheme();

  const iconColor = colorScheme === 'light' ? "black" : "white";

  return (
    <Pressable
      className={`items-center`}
      onPress={onPress}
    >
        <Ionicons name="close-outline" size={40} color={iconColor} />
    </Pressable>
  );
}