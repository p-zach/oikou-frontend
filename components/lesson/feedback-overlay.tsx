import Button from '@/components/button';
import '@/global.css';
import { Feedback } from '@/types/lesson-session';
import { Text, View } from 'react-native';

interface FeedbackOverlayProps {
  feedback: Feedback | null;
  onContinue: () => void;
}

export default function FeedbackOverlay({ feedback, onContinue }: FeedbackOverlayProps) {
  const color = feedback?.correct ? "text-green-500" : "text-red-500";

  return (
    <View className='gap-4'>
      <Text className={`font-lexend-regular text-lg ${color}`}>{ feedback?.message }</Text>
      <Button text='Continue' onPress={onContinue} className='self-start'/>
    </View>
  );
}