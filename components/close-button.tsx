import '@/global.css';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RelativePathString, router, UnknownInputParams } from 'expo-router';
import { useColorScheme } from 'nativewind';
import { Pressable } from 'react-native';

interface CloseButtonProps {
  route: { pathname: RelativePathString, params?: UnknownInputParams };
}

export default function CloseButton({ route }: CloseButtonProps) {
  const onPress = () => {
    if (router.canGoBack())
      router.back()
    else
      router.push(route)
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