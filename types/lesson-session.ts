/** Lesson phases */
export type LessonPhase =
  | 'loading'
  | 'answering'
  | 'feedback'
  | 'completed'

/** Challenges */
export type ChallengeType = 
  | 'multiple-choice';

export interface Challenge {
  challengeType: ChallengeType;
  question: string;
};

export interface MultipleChoiceChallenge extends Challenge {
  challengeType: 'multiple-choice';
  options: string[];
  correctOptionIndex: number;
}

/** Feedback */
export type Feedback = {
  correct: boolean;
  message: string;
}