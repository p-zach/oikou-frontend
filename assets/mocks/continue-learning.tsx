import { LessonSubject } from "@/types/lessons";
import { Region } from "@/types/regions";

// User's most recent lesson mock
// TODO: Retrieve from API instead
export const mock_continue_learning: { 
    region: Region, 
    lesson_type: LessonSubject 
} = {
    region: "europe",
    lesson_type: "capitals",
}