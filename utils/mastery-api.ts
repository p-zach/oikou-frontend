import { MasterySummary } from "@/domain/user";
import { getAPI, logApiError } from "@/utils/api";

export const getMasterySummary = async (regions?: string[], subjects?: string[]): Promise<MasterySummary | undefined> => {
  try {
    if (!regions) regions = [];
    if (!subjects) subjects = []
    const api = await getAPI();
    const response = await api.get(`/mastery/summary?regions=${regions.join(',')}&subjects=${subjects.join(',')}`);
    return response.data;
  } catch (error) {
    logApiError(error);
  }
};