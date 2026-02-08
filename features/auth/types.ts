export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
      success: boolean;
    }
  | undefined;

export type OauthProvider = 'google' | 'github';
