import Button from '@/components/button';
import '@/global.css';
import { Feedback } from '@/types/lesson-session';
import { Text, View } from 'react-native';

interface FeedbackOverlayProps {
  feedback: Feedback | null;
  onContinue: () => void;
}

export default function FeedbackOverlay({ feedback, onContinue }: FeedbackOverlayProps) {
  return (
    <View>
      <Text>Feedback: { feedback?.message }</Text>
      <Button text='Continue' onPress={onContinue}/>
    </View>
  );
}