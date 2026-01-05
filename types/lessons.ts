export const AllLessons = [
    'capitals',
    'flags',
    'neighbors',
] as const;

export type LessonType = typeof AllLessons[number];

export type LessonMetadataType = {
    title: string;
}

export const LessonMetadata: Record<LessonType, LessonMetadataType> = {
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