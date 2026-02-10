import { AppText, CloseButton } from '@/components';
import { LessonPhase, LessonProgress } from '@/domain/lesson-session';
import { Region } from '@/domain/region';
import '@/global.css';
import { View } from 'react-native';
import { Bar } from 'react-native-progress';

interface LessonHUDProps {
  region: Region;
  phase: LessonPhase;
  progress: LessonProgress | undefined;
}

export default function LessonHUD({ region, phase, progress }: LessonHUDProps) {
  return (
    <>
      <View className='flex-row justify-between items-center'>
        {phase !== 'error' && 
          <Bar progress={progress?.percent} width={200} height={15} />
        }
        {/* Dummy view to force close button always to the right */}
        <View></View>
        <CloseButton route={{ pathname: "./region", params: { r: region } }} />
      </View>
      {phase === 'error' && 
        <View>
          <AppText className='text-lg'>
            An error occurred. Please try again later.
          </AppText>
        </View>
      }
    </>
  );
}