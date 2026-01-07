import '@/global.css';
import { LessonProgress } from '@/types/lesson-session';
import { Text, View } from 'react-native';

interface LessonHUDProps {
  progress: LessonProgress | undefined;
}

export default function LessonHUD({ progress }: LessonHUDProps) {
  return (
    <View>
      <Text>Progress: { progress?.percent }</Text>
    </View>
  );
}