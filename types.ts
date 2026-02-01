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

export type OauthProvider =
  | 'google'
  | 'github'
  | 'apple'
  | 'atlassian'
  | 'cognito'
  | 'discord'
  | 'facebook'
  | 'figma'
  | 'microsoft'
  | 'huggingface'
  | 'slack'
  | 'spotify'
  | 'twitch'
  | 'twitter'
  | 'dropbox'
  | 'kick'
  | 'linear'
  | 'linkedin'
  | 'gitlab'
  | 'tiktok'
  | 'reddit'
  | 'roblox'
  | 'salesforce'
  | 'vk'
  | 'zoom'
  | 'notion'
  | 'kakao'
  | 'naver'
  | 'paybin'
  | 'paypal'
  | 'polar'
  | 'vercel';
