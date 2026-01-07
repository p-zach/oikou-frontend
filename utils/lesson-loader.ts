import { Lesson, LessonRequest, MultipleChoiceChallenge } from "@/types/lesson-session";

// Mock lesson data
const mockLessonData: Lesson = {
  sessionId: "asdf-ghjk-zxcv",
  challenges: [
    {
      challengeType: 'multiple-choice',
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctOptionIndex: 2,
    } as MultipleChoiceChallenge,
    {
      challengeType: 'multiple-choice',
      question: "What is the capital of Spain?",
      options: ["Paris", "London", "Lisbon", "Madrid"],
      correctOptionIndex: 3,
    } as MultipleChoiceChallenge,
    {
      challengeType: 'multiple-choice',
      question: "What is the capital of the United Kingdom?",
      options: ["London", "Berlin", "Newcastle", "Brussels"],
      correctOptionIndex: 0,
    } as MultipleChoiceChallenge,
  ],
}

// TODO: Send request to API
export const loadLesson = async (request: LessonRequest): Promise<Lesson> => {
  return mockLessonData;
};