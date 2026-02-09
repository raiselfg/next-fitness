'use server';

import { APIError } from 'better-auth/api';
import { headers } from 'next/headers';
import { cache } from 'react';

import { auth, Session } from '../lib/better-auth';

export const getSession = cache(async () => {
  try {
    const response = await auth.api.getSession({
      headers: await headers(),
      asResponse: true,
    });

    if (response.ok) {
      const data: Session = await response.json();

      return data;
    }

    return null;
  } catch (error) {
    // FIX: Bubble up internal Next.js dynamic signals.
    // Next.js uses these to identify dynamic boundaries. Catching them breaks PPR.
    if (
      error instanceof Error &&
      (error.message.includes('headers()') ||
        ('digest' in error && typeof error.digest === 'string' && error.digest.includes('DYNAMIC')))
    ) {
      throw error;
    }

    // Обработка APIError из Better Auth
    if (error instanceof APIError) {
      // Для всех ошибок APIError возвращаем null
      // так как отсутствие сессии - это валидное состояние
      throw error;
    }

    // Проверка на ошибки сети
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('Network error during session fetch');
      throw error;
    }

    // Проверка на ошибки таймаута
    if (error instanceof Error && error.message.includes('timeout')) {
      console.error('Timeout error during session fetch');
      throw error;
    }

    throw error;
  }
});
