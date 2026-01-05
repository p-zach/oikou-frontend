import { Challenge, MultipleChoiceChallenge } from "@/types/lesson-session";

// Mock lesson data
const mockLessonData: Challenge[] = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctOptionIndex: 2,
  } as MultipleChoiceChallenge,
  {
    question: "What is the capital of Spain?",
    options: ["Paris", "London", "Lisbon", "Madrid"],
    correctOptionIndex: 3,
  } as MultipleChoiceChallenge,
  {
    question: "What is the capital of the United Kingdom?",
    options: ["London", "Berlin", "Newcastle", "Brussels"],
    correctOptionIndex: 1,
  } as MultipleChoiceChallenge,
];

export const loadLesson = async (lessonId: string): Promise<Challenge[]> => {
  return Promise.resolve(mockLessonData);
};