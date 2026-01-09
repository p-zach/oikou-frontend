import { LessonSubject } from "@/domain/lesson";
import { Region } from "@/domain/region";

/** Lesson request */
export type LessonRequest = {
  region: Region;
  subject: LessonSubject;
}

/** Lesson */
export type Lesson = {
  sessionId: string;
  challenges: Challenge[];
}

/** Lesson phases */
export type LessonPhase =
  | 'loading'
  | 'answering'
  | 'feedback'
  | 'completed'

/** Progress */
export type LessonProgress = {
  current: number;
  total: number;
  percent: number;
  correct: number;
}

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