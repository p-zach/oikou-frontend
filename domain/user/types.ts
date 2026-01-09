import { LessonSubject } from "@/domain/lesson";

export type RegionUserData = {
  mastery: Record<LessonSubject, number>,
}