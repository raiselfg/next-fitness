'use server';

import { APIError } from 'better-auth/api';
import * as v from 'valibot';

import { LoginFormSchema } from '@/features/auth/schema/auth';
import { FormState } from '@/features/auth/types';

import { auth } from '../lib/better-auth';

export const login = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  try {
    const validatedFields = v.safeParse(LoginFormSchema, {
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      return {
        errors: v.flatten(validatedFields.issues).nested,
        success: false,
      };
    }

    const { email, password } = validatedFields.output;

    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
      },
      asResponse: true,
    });

    if (response.ok) {
      return { message: 'Вход выполнен успешно', success: true };
    } else {
      const errorData = await response.json();

      // Проверка на неверные учетные данные
      if (
        errorData.message?.includes('Invalid credentials') ||
        errorData.message?.includes('invalid') ||
        errorData.message?.includes('credentials')
      ) {
        return { message: 'Неверный email или пароль', success: false };
      }

      // Проверка на неподтвержденный email
      if (
        errorData.message?.includes('email not verified') ||
        errorData.message?.includes('verify') ||
        errorData.message?.includes('verification')
      ) {
        return { message: 'Пожалуйста, подтвердите ваш email адрес', success: false };
      }

      // Проверка на заблокированный аккаунт
      if (
        errorData.message?.includes('account blocked') ||
        errorData.message?.includes('suspended') ||
        errorData.message?.includes('disabled')
      ) {
        return { message: 'Ваш аккаунт заблокирован', success: false };
      }

      // Проверка на превышение попыток входа
      if (
        errorData.message?.includes('too many attempts') ||
        errorData.message?.includes('rate limit') ||
        errorData.message?.includes('throttle')
      ) {
        return { message: 'Слишком много попыток входа. Попробуйте позже', success: false };
      }

      // Проверка на отсутствие пользователя
      if (
        errorData.message?.includes('user not found') ||
        errorData.message?.includes('not found')
      ) {
        return { message: 'Пользователь с таким email не найден', success: false };
      }

      // Проверка на некорректный email формат
      if (
        errorData.message?.includes('invalid email') ||
        errorData.message?.includes('email format')
      ) {
        return { message: 'Некорректный формат email', success: false };
      }

      return { message: 'Неверные учетные данные', success: false };
    }
  } catch (error) {
    console.error('Login error:', error);

    // Обработка APIError из Better Auth
    if (error instanceof APIError) {
      // Неавторизованный доступ
      if (error.status === 401) {
        return { message: 'Неверный email или пароль', success: false };
      }

      // Неверный запрос
      if (error.status === 400) {
        return { message: 'Некорректные данные для входа', success: false };
      }

      // Превышение лимита запросов
      if (error.status === 429) {
        return { message: 'Слишком много попыток входа. Попробуйте позже', success: false };
      }

      // Запрещенный доступ
      if (error.status === 403) {
        return { message: 'Доступ запрещен', success: false };
      }

      // Внутренняя ошибка сервера
      if (error.status === 500) {
        return { message: 'Внутренняя ошибка сервера', success: false };
      }

      // Сервис недоступен
      if (error.status === 503) {
        return { message: 'Сервис временно недоступен', success: false };
      }
    }

    // Проверка на ошибки сети
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return { message: 'Проблема с подключением к серверу', success: false };
    }

    return {
      message: 'Не удалось войти',
      success: false,
    };
  }
};
