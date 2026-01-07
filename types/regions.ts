import * as Lessons from '@/types/lessons';

export const AllRegions = [
  'europe',
  'americas',
  'africa',
] as const;
export type Region = typeof AllRegions[number];

export type RegionMetadataType = {
    title: string;
}

export const RegionMetadata: Record<Region, RegionMetadataType> = {
    europe: {
        title: "Europe",
    },
    americas: {
        title: "The Americas",
    },
    africa: {
        title: "Africa",
    },
}

export type RegionUserDataType = {
  mastery: Record<Lessons.LessonSubject, number>,
}

export type RegionUserDataMapType = Record<Region, RegionUserDataType>;
