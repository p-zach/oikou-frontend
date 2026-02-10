import { AppText, Button } from '@/components';
import '@/global.css';
import { router } from 'expo-router';
import { View } from 'react-native';

export default function LessonComplete() {
  const onContinuePress = () => {
    router.back()
  }

  return (
    <View className='gap-4'>
      <AppText className='text-xl'>Lesson complete!</AppText>
      <Button text='Continue' onPress={onContinuePress} className='self-start' />
    </View>
  );
}