import { AppText, Button } from '@/components';
import { Challenge, MultipleChoiceChallenge } from '@/domain/lesson-session';
import '@/global.css';
import { View } from 'react-native';

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
      <AppText className='text-lg'>{ challenge.question }</AppText>
      <View className='md:flex-row gap-4'>
        { challenge.options.map((option, index) => {
          return <Button key={option} text={option} onPress={() => props.onSubmit(index)}/>
        })}
      </View>
    </View>
  );
}