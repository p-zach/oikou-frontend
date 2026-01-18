import { Fact } from "@/domain/lesson";
import { getAPI, logApiError } from "@/utils/api";

export const getFacts = async (fact_ids: string[], subject?: string): Promise<Fact[] | undefined> => {
  try {
    const api = await getAPI();
    const response = await api.get(`/facts?fact_ids=${fact_ids.join(',')}&subject=${subject}`);
    return response.data;
  } catch (error) {
    logApiError(error);
  }
};