import { AppText, Button } from '@/components';
import { Feedback } from '@/domain/lesson-session';
import '@/global.css';
import { View } from 'react-native';

interface FeedbackOverlayProps {
  feedback: Feedback | null;
  onContinue: () => void;
}

export default function FeedbackOverlay({ feedback, onContinue }: FeedbackOverlayProps) {
  const color = feedback?.correct ? "text-green-500" : "text-red-500";

  return (
    <View className='gap-4'>
      <AppText className={`text-lg ${color}`}>{ feedback?.message }</AppText>
      <Button text='Continue' onPress={onContinue} className='self-start'/>
    </View>
  );
}