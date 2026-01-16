import { Challenge, Feedback, Lesson, LessonPhase, LessonProgress, LessonRequest, MultipleChoiceChallenge } from '@/domain/lesson-session';
import { loadLesson } from '@/utils/lesson-loader';
import { useState } from 'react';

export function useLessonSession() {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<LessonPhase>('loading');
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  async function startLesson(request: LessonRequest) {
    // Reset local state
    setLesson(null);
    setPhase('loading');
    setIndex(0);

    const lesson = await loadLesson(request);

    if (lesson === undefined) {
      // TODO: Show error
      console.error("No lesson was received from the server.")
      return;
    }

    setLesson(lesson);
    setPhase('answering');
  }

  const currentChallenge = lesson?.challenges[index];

  const progress: LessonProgress | undefined = lesson === null ? undefined : {
    current: index,
    total: lesson.challenges.length,
    percent: index / lesson.challenges.length,
  }

  async function submitAnswer(answer: unknown) {
    if (currentChallenge === undefined 
        || lesson == null 
        || phase !== 'answering') 
      return;

    setPhase('feedback');

    const result = await checkAnswer(currentChallenge, answer);

    setFeedback(result);
    if (!result.correct) {
      // Add the failed challenge to the end of the challenge list
      const newChallenges = [...lesson.challenges, currentChallenge];
      setLesson({ ...lesson, challenges: newChallenges });
    }
  }

  function next() {
    if (lesson === null)
      return;

    setFeedback(null);

    if (index + 1 >= lesson.challenges.length) {
      setPhase('completed');
      completeLesson();
    } else {
      setPhase('answering');
    }
    setIndex(i => i + 1);
  }

  return {
    startLesson,
    currentChallenge,
    progress,
    phase,
    feedback,
    submitAnswer,
    next
  }
}

const checkAnswer = async (challenge: Challenge, answer: unknown): Promise<Feedback> => {
  // Simulate answer checking logic
  if (challenge.challengeType === 'multiple-choice') {
    const mcChallenge = challenge as MultipleChoiceChallenge;
    const isCorrect = mcChallenge.correctOptionIndex === answer;
    return {
      correct: isCorrect,
      message: isCorrect ? 'Correct!' : 'Incorrect.',
    };
  }
  return {
    correct: false,
    message: 'Invalid challenge type.',
  };
};

const completeLesson = () => {
  // Backend lesson completion logic
}
