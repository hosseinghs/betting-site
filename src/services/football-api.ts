import { apiClient } from '@/lib/api-client';
import {
  ApiResponse,
  Match,
  HeadToHeadResponse,
  LiveMatchResponse,
  ApiRequestConfig
} from '@/types/api.types';

export const footballApi = {
  // Get match details between two teams
  getFixture: async (matchId: number, config?: ApiRequestConfig) => {
    const response = await apiClient.get<ApiResponse<Match>>(`/fixtures?ids=215662-215663-215664-215665-215666-215667`);
    return response.data;
  },
  // Get head-to-head matches between two teams
  getHeadToHead: async (team1Id: number, team2Id: number, config?: ApiRequestConfig) => {
    const response = await apiClient.get<ApiResponse<HeadToHeadResponse>>(
      `/fixtures/headtohead?h2h=${team1Id}-${team2Id}`,
      config
    );
    return response.data;
  },

  // Get live matches
  getLiveMatches: async (config?: ApiRequestConfig) => {
    const response = await apiClient.get<ApiResponse<LiveMatchResponse>>('/fixtures?live=all', config);
    return response.data;
  },
}; 