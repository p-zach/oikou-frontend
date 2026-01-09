import Button from '@/components/button';
import '@/global.css';
import { Challenge, MultipleChoiceChallenge } from '@/types/lesson-session';
import { Text, View } from 'react-native';

interface ChallengeRendererProps {
  challenge: Challenge;
  disabled: boolean;
  onSubmit: (answer: unknown) => void;
}

export default function ChallengeRenderer(props: ChallengeRendererProps) {
  switch (props.challenge.challengeType) {
    case 'multiple-choice':
      return <MultipleChoiceChallengeView {...props}/>;
  }
}

function MultipleChoiceChallengeView(props: ChallengeRendererProps) {
  const challenge = props.challenge as MultipleChoiceChallenge;

  return (
    <View className='gap-4'>
      <Text className='font-lexend-regular text-lg'>{ challenge.question }</Text>
      <View className='md:flex-row gap-4'>
        { challenge.options.map((option, index) => {
          return <Button key={option} text={option} onPress={() => props.onSubmit(index)}/>
        })}
      </View>
    </View>
  );
}