'use server';

import { APIError } from 'better-auth/api';
import { headers } from 'next/headers';

import { FormState } from '@/types';

import { auth } from '../better-auth';

export const logout = async (): Promise<FormState> => {
  try {
    const response = await auth.api.signOut({
      headers: await headers(),
      asResponse: true,
    });

    if (response.ok) {
      return { message: 'Выход выполнен успешно', success: true };
    } else {
      const errorData = await response.json();

      // Проверка на отсутствие активной сессии
      if (
        errorData.message?.includes('No session') ||
        errorData.message?.includes('not authenticated') ||
        errorData.message?.includes('no active session')
      ) {
        return { message: 'Вы уже вышли из системы', success: true };
      }

      // Проверка на недействительную сессию
      if (
        errorData.message?.includes('Invalid session') ||
        errorData.message?.includes('session expired') ||
        errorData.message?.includes('token')
      ) {
        return { message: 'Сессия истекла, выход выполнен', success: true };
      }

      // Проверка на проблемы с cookie
      if (errorData.message?.includes('cookie') || errorData.message?.includes('missing cookie')) {
        return { message: 'Проблема с данными сессии', success: false };
      }

      // Проверка на проблемы с базой данных
      if (errorData.message?.includes('database') || errorData.message?.includes('connection')) {
        return { message: 'Проблема с базой данных при выходе', success: false };
      }

      return { message: 'Не удалось выйти', success: false };
    }
  } catch (error) {
    console.error('Logout error:', error);

    // Обработка APIError из Better Auth
    if (error instanceof APIError) {
      switch (error.status) {
        case 400:
          return { message: 'Некорректный запрос на выход', success: false };
        case 401:
          // Если пользователь не авторизован, считаем выход успешным
          return { message: 'Вы уже вышли из системы', success: true };
        case 403:
          return { message: 'Доступ запрещен', success: false };
        case 404:
          // Сессия не найдена - считаем выход успешным
          return { message: 'Сессия не найдена, выход выполнен', success: true };
        case 422:
          return { message: 'Ошибка обработки данных сессии', success: false };
        case 429:
          return { message: 'Слишком много запросов. Попробуйте позже', success: false };
        case 500:
          return { message: 'Внутренняя ошибка сервера', success: false };
        case 502:
          return { message: 'Сервер временно недоступен', success: false };
        case 503:
          return { message: 'Сервис временно недоступен', success: false };
        default:
          return { message: `Ошибка сервера: ${error.status}`, success: false };
      }
    }

    // Проверка на ошибки сети
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return { message: 'Проблема с подключением к серверу', success: false };
    }

    // Проверка на ошибки таймаута
    if (error instanceof Error && error.message.includes('timeout')) {
      return { message: 'Превышено время ожидания ответа сервера', success: false };
    }

    // Проверка на ошибки CORS
    if (error instanceof Error && error.message.includes('CORS')) {
      return { message: 'Проблема с политикой безопасности', success: false };
    }

    return {
      message: 'Не удалось выйти',
      success: false,
    };
  }
};
