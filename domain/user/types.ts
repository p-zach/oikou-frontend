import { LessonSubject } from "@/domain/lesson";
import { Region } from "@/domain/region";

export type MasterySummary = Record<Region, Record<LessonSubject, RegionSubjectMastery>>

export type RegionSubjectMastery = {
  mastery: number;
  total: number;
  region?: Region;
  subject?: LessonSubject;
}