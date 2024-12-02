export interface PromptRequestBody {
  user_role: string;
  years_of_experience: number;
  past_experience: string;
  skills: string[];
  domain: string;
  word_limit: number;
  include_metrics: boolean;
}
