export const AllLessons = [
    'capitals',
    'flags',
    'neighbors',
] as const;

export type LessonType = typeof AllLessons[number]