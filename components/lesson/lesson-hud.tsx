import { LessonPhase, LessonProgress } from '@/domain/lesson-session';
import '@/global.css';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import CloseButton from '../close-button';

interface LessonHUDProps {
  phase: LessonPhase;
  progress: LessonProgress | undefined;
}

export default function LessonHUD({ phase, progress }: LessonHUDProps) {
  return (
    <>
      <View className='flex-row justify-between items-center'>
        {phase !== 'error' && 
          <Bar progress={progress?.percent} width={200} height={15} />
        }
        {/* Dummy view to force close button always to the right */}
        <View></View>
        <CloseButton />
      </View>
      {phase === 'error' && 
        <View>
          <Text className='text-lg font-lexend-regular'>
            An error occurred. Please try again later.
          </Text>
        </View>
      }
    </>
  );
}