import Button from '@/components/button';
import '@/global.css';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

export default function LessonComplete() {
  const onContinuePress = () => {
    router.back()
  }

  return (
    <View className='gap-4'>
      <Text className='font-lexend-regular text-xl'>Lesson complete!</Text>
      <Button text='Continue' onPress={onContinuePress} className='self-start' />
    </View>
  );
}