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
    <View>
      <Text>{ challenge.question }</Text>
      { challenge.options.map((option, index) => {
        return <Button key={option} text={option} onPress={() => props.onSubmit(index)}/>
      })}
    </View>
  );
}