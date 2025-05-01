// Base API Response type
export interface ApiResponse<T> {
  get: string;
  parameters: Record<string, string>;
  errors: string[];
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: T;
}

// API Error types
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// Request configuration types
export interface ApiRequestConfig {
  params?: Record<string, string | number>;
  headers?: Record<string, string>;
}

// Common API status types
export interface ApiStatus {
  long: string;
  short: string;
}

// Common API team types
export interface ApiTeam {
  id: number;
  name: string;
  logo: string;
}

// Common API score types
export interface ApiScore {
  home: number | null;
  away: number | null;
}

// Common API goals types
export interface ApiGoals {
  home: number | null;
  away: number | null;
}

// Common API fixture types
export interface ApiFixture {
  id: number;
  date: string;
  status: ApiStatus;
}

// Match related types
export interface Match {
  fixture: ApiFixture;
  teams: {
    home: ApiTeam;
    away: ApiTeam;
  };
  goals: ApiGoals;
  score: {
    halftime: ApiScore;
    fulltime: ApiScore;
  };
}

// Head to Head response type
export interface HeadToHeadResponse {
  matches: Match[];
  statistics: {
    home: Record<string, number>;
    away: Record<string, number>;
  };
}

// Live match response type
export interface LiveMatchResponse {
  matches: Match[];
  total: number;
} 