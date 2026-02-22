import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Stack } from "expo-router";
import { View } from 'react-native';

export default function TabsLayout() {
  return (
    <View className='flex-1'>
      <Stack screenOptions={{ headerShown: false }} />
      <View className='bg-background border-border border-t flex-row justify-around'>
        <Link href={'/home'} className='p-2 flex-grow flex flex-row justify-center'>
          <Ionicons name="home" size={36} className='text-textPrimary' />
        </Link>
        <Link href={'/profile'} className='p-2 flex-grow flex flex-row justify-center'>
          <Ionicons name="person-circle" size={36} className='text-textPrimary' />
        </Link>
      </View>
    </View>
  );
}
