'use client';

import { useQuery } from '@tanstack/react-query';
import { footballApi } from '@/services/football-api';
import { format } from 'date-fns';
import { ApiResponse, Match } from '@/types/api.types';

export default function MatchDetails({ matchId }: { matchId: number }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['match', matchId],
    queryFn: () => footballApi.getFixture(matchId),
    staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Cache is kept for 10 minutes
    refetchInterval: (data) => {
      // Only refetch if the match is live and we have data
      if (!data?.response?.[0]) return false;
      return data.response[0].fixture.status.short === 'LIVE' ? 60 * 1000 : false;
    },
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
    retry: 3, // Let the API client handle retries
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000), // Exponential backoff
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">
          {error instanceof Error 
            ? error.message 
            : 'Failed to load match details. Please try again later.'}
        </span>
      </div>
    );
  }

  const match = data?.response?.[0];
  if (!match) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Match not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col items-center space-y-6">
        {/* Match Header */}
        <div className="text-center">
          <div className="text-sm text-gray-500 mb-2">
            {format(new Date(match.fixture.date), 'EEEE, MMMM d, yyyy')}
          </div>
          <div className="text-lg font-medium text-gray-700">
            {match.fixture.status.long}
          </div>
        </div>

        {/* Teams and Score */}
        <div className="flex items-center justify-between w-full max-w-2xl">
          {/* Home Team */}
          <div className="flex flex-col items-center space-y-2 flex-1">
            <img
              src={match.teams.home.logo}
              alt={match.teams.home.name}
              className="w-16 h-16 object-contain"
            />
            <span className="font-medium text-gray-900 text-center">
              {match.teams.home.name}
            </span>
          </div>

          {/* Score */}
          <div className="flex flex-col items-center px-8">
            <div className="text-3xl font-bold text-gray-900">
              {match.goals.home ?? '-'} - {match.goals.away ?? '-'}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {match.fixture.status.short}
            </div>
          </div>

          {/* Away Team */}
          <div className="flex flex-col items-center space-y-2 flex-1">
            <img
              src={match.teams.away.logo}
              alt={match.teams.away.name}
              className="w-16 h-16 object-contain"
            />
            <span className="font-medium text-gray-900 text-center">
              {match.teams.away.name}
            </span>
          </div>
        </div>

        {/* Match Details */}
        <div className="w-full max-w-2xl border-t border-gray-200 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-sm">
              <span className="text-gray-500">Halftime Score:</span>
              <span className="ml-2 font-medium">
                {match.score.halftime.home ?? '-'} - {match.score.halftime.away ?? '-'}
              </span>
            </div>
            <div className="text-sm">
              <span className="text-gray-500">Fulltime Score:</span>
              <span className="ml-2 font-medium">
                {match.score.fulltime.home ?? '-'} - {match.score.fulltime.away ?? '-'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 