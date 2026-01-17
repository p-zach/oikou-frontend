import { Challenge, ChallengeResult, Feedback, Lesson, LessonPhase, LessonProgress, LessonRequest, LessonResult, MultipleChoiceChallenge } from '@/domain/lesson-session';
import { loadLesson, sendLessonComplete } from '@/utils/lesson-api';
import { useRef, useState } from 'react';

export function useLessonSession() {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<LessonPhase>('loading');
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const challengeResults = useRef<ChallengeResult[]>([]);

  async function startLesson(request: LessonRequest) {
    // Reset local state
    setLesson(null);
    setPhase('loading');
    setIndex(0);
    challengeResults.current = [];

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
      lesson.challenges.push(currentChallenge);
      setLesson(lesson);
    }
    
    // Store result of challenge to be sent in lesson complete payload
    challengeResults.current.push({
      factId: currentChallenge.factId,
      correct: result.correct,
    })
  }

  function next() {
    if (lesson === null)
      return;

    setFeedback(null);

    if (index + 1 >= lesson.challenges.length) {
      setPhase('completed');
      completeLesson(lesson, challengeResults.current);
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

const completeLesson = async (lesson: Lesson, challegeResults: ChallengeResult[]) => {
  const payload: LessonResult = {
    sessionId: lesson.sessionId,
    results: challegeResults,
  }

  await sendLessonComplete(payload);
}
