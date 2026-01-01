import '@/global.css';
import { Pressable, Text } from 'react-native';

interface PracticeButtonProps {
  practice_text: string;
}

export default function PracticeButton({ practice_text }: PracticeButtonProps) {
  const onPress = () => {
    alert('Going to practice: ' + practice_text);
  };

  return (
    <Pressable
      className="bg-primary rounded-xl items-center p-3"
      onPress={onPress}
    >
      <Text
        className="font-lexend-regular text-lg text-textPrimary"
        onPress={onPress}
      >
        {practice_text}
      </Text>
    </Pressable>
  );
}