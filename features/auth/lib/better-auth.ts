import { prismaAdapter } from 'better-auth/adapters/prisma';
import { betterAuth } from 'better-auth/minimal';
import { nextCookies } from 'better-auth/next-js';

import { prisma } from '@/prisma/prisma-client';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  user: {
    additionalFields: {
      role: { type: 'string', required: false },
      gender: { type: 'string', required: false },
      birthDate: { type: 'date', required: false },
      height: { type: 'number', required: false },
      weight: { type: 'number', required: false },
      bodyFat: { type: 'number', required: false },
      meals: { type: 'number', required: false },
      location: { type: 'string', required: false },
      frequency: { type: 'number', required: false },
    },
  },

  trustedOrigins: [process.env.BETTER_AUTH_URL!],

  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: true,
  },

  socialProviders: {
    github: {
      prompt: 'select_account',
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      prompt: 'select_account',
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  rateLimit: {
    enabled: true,
    window: 10,
    max: 100,
    storage: 'memory',
  },

  advanced: {
    useSecureCookies: true,
    defaultCookieAttributes: {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    },
  },

  plugins: [nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
