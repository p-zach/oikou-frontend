import * as Lessons from '@/types/lessons';

export const AllRegions = [
  'europe',
  'americas',
  'africa',
] as const;
export type Region = typeof AllRegions[number];

export type RegionData = {
  title: string,
  mastery: Record<Lessons.LessonType, number>
}

export type RegionDataCollection = Record<Region, RegionData>;
