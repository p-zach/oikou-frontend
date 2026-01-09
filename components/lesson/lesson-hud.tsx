import { LessonProgress } from '@/domain/lesson-session';
import { Region } from '@/domain/region';
import '@/global.css';
import { View } from 'react-native';
import { Bar } from 'react-native-progress';
import CloseButton from '../close-button';

interface LessonHUDProps {
  region: Region;
  progress: LessonProgress | undefined;
}

export default function LessonHUD({ region, progress }: LessonHUDProps) {
  return (
    <View className='flex-row justify-between items-center'>
      <Bar progress={progress?.percent} width={200} height={15} />
      <CloseButton route={{ pathname: "./region", params: { r: region } }} />
    </View>
  );
}