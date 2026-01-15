import { Lesson, LessonRequest } from "@/domain/lesson-session";
import api from "@/utils/api";
import { isAxiosError } from "axios";

export const loadLesson = async (request: LessonRequest): Promise<Lesson | undefined> => {
  try {
    const response = await api.post("/lesson/start", request);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};