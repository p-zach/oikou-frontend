import { LESSON_METADATA } from './constants';
import type { LessonSubject } from './types';

export function getAllLessonSubjects(): LessonSubject[] {
  return Object.keys(LESSON_METADATA) as LessonSubject[];
}

export function getLessonTitle(subject: LessonSubject): string {
  return LESSON_METADATA[subject].title;
}
