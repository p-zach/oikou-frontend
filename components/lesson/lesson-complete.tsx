import Button from '@/components/button';
import { LessonProgress } from '@/domain/lesson-session';
import { Region } from '@/domain/region';
import '@/global.css';
import { router } from 'expo-router';
import { Text, View } from 'react-native';

interface LessonCompleteProps {
  region: Region;
  progress: LessonProgress;
}

export default function LessonComplete({ region, progress }: LessonCompleteProps) {
  const onContinuePress = () => {
    router.push({
      pathname: "/learn/region",
      params: { 
        r: region,
      }
    })
  }

  return (
    <View className='gap-4'>
      <Text className='font-lexend-regular text-xl'>Lesson complete!</Text>
      <Button text='Continue' onPress={onContinuePress} className='self-start' />
    </View>
  );
}