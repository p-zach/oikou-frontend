import { Challenge, Feedback, LessonPhase, MultipleChoiceChallenge } from '@/types/lesson-session';
import { loadLesson } from '@/utils/lesson-loader';
import { useEffect, useState } from 'react';

export function useLessonSession(lessonId: string) {
  const [challenges, setChallenges] = useState<Challenge[]>([])
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<LessonPhase>('loading')
  const [feedback, setFeedback] = useState<Feedback | null>(null)

  useEffect(() => {
    loadLesson(lessonId).then(data => {
      setChallenges(data)
      setPhase('answering')
    })
  }, [lessonId]);

  const currentChallenge = challenges[index]

  const progress = {
    current: index + 1,
    total: challenges.length,
    percent: (index + 1) / challenges.length
  }

  async function submitAnswer(answer: unknown) {
    if (phase !== 'answering') return

    setPhase('feedback')

    const result = await checkAnswer(currentChallenge, answer)

    setFeedback(result)
  }

  function next() {
    setFeedback(null)

    if (index + 1 >= challenges.length) {
      setPhase('completed')
      completeLesson()
    } else {
      setIndex(i => i + 1)
      setPhase('answering')
    }
  }

  return {
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
      message: isCorrect ? 'Correct!' : 'Incorrect.'
    };
  }
  return {
    correct: false,
    message: 'Invalid challenge type.'
  };
};

const completeLesson = () => {
  // Simulate lesson completion logic
  alert('Lesson completed!');
}