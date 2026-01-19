import { LessonSubject } from "@/domain/lesson";
import { Region } from "@/domain/region";

/** Requests */
export type LessonRequest = {
  region: Region;
  subject: LessonSubject;
  questionCount: number;
}

/** Lesson */
export type Lesson = {
  sessionId: string;
  challenges: Challenge[];
}

export type LessonResult = {
  sessionId: string;
  results: ChallengeResult[];
}

/** Lesson phases */
export type LessonPhase =
  | 'loading'
  | 'answering'
  | 'feedback'
  | 'completed'
  | 'error'

/** Progress */
export type LessonProgress = {
  current: number;
  total: number;
  percent: number;
}

/** Challenges */
export type ChallengeType = 
  | 'multiple-choice'

export interface Challenge {
  factId: string;
  challengeType: ChallengeType;
  question: string;
};

export type ChallengeResult = {
  factId: string;
  correct: boolean;
}

export interface MultipleChoiceChallenge extends Challenge {
  options: string[];
  correctOptionIndex: number;
}

/** Feedback */
export type Feedback = {
  correct: boolean;
  message: string;
}