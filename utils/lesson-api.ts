import { Lesson, LessonRequest, LessonResult } from "@/domain/lesson-session";
import { getAPI, logApiError } from "@/utils/api";

export const loadLesson = async (request: LessonRequest): Promise<Lesson | undefined> => {
  try {
    const api = await getAPI();
    const response = await api.post("/lesson/start", request);
    return response.data;
  } catch (error) {
    logApiError(error);
  }
};

// TODO: UI should provide an error popup if lesson complete fails on the backend.
export const sendLessonComplete = async (request: LessonResult): Promise<void> => {
  try {
    const api = await getAPI();
    await api.post("/lesson/complete", request);
  } catch (error) {
    logApiError(error);
  }
}