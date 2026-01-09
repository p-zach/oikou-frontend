import { LESSON_METADATA } from './constants';

export type LessonSubject = keyof typeof LESSON_METADATA;

export type LessonMetadata = typeof LESSON_METADATA[LessonSubject];
