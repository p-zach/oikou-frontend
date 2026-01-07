export const AllLessons = [
    'capitals',
    'flags',
    'neighbors',
] as const;

export type LessonSubject = typeof AllLessons[number];

export type LessonMetadataType = {
    title: string;
}

export const LessonMetadata: Record<LessonSubject, LessonMetadataType> = {
    capitals: {
        title: "Capitals",
    },
    flags: {
        title: "Flags",
    },
    neighbors: {
        title: "Neighbors",
    },
}