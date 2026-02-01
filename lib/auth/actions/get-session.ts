'use server';

import { APIError } from 'better-auth/api';
import { headers } from 'next/headers';

import { auth } from '../better-auth';

export const getSession = async () => {
  try {
    const response = await auth.api.getSession({
      headers: await headers(),
      asResponse: true,
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      if (response.status === 401 || response.status === 403) {
        return null;
      }

      // При других ошибках тоже возвращаем null, но логируем
      const errorData = await response.json().catch(() => ({}));
      console.error('Session error data:', errorData);

      return null;
    }
  } catch (error) {
    console.error('Session fetch error:', error);

    // Обработка APIError из Better Auth
    if (error instanceof APIError) {
      // Для всех ошибок APIError возвращаем null
      // так как отсутствие сессии - это валидное состояние
      return null;
    }

    // Проверка на ошибки сети
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('Network error during session fetch');
      return null;
    }

    // Проверка на ошибки таймаута
    if (error instanceof Error && error.message.includes('timeout')) {
      console.error('Timeout error during session fetch');
      return null;
    }

    return null;
  }
};
