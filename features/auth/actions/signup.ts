'use server';

import { APIError } from 'better-auth/api';
import * as v from 'valibot';

import { generateAvatar } from '@/features/auth/lib/generate-avatar';
import { SignupFormSchema } from '@/features/auth/schema/auth';
import { FormState } from '@/features/auth/types';

import { auth } from '../lib/better-auth';

export const signUp = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  try {
    const validatedFields = v.safeParse(SignupFormSchema, {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (!validatedFields.success) {
      return {
        errors: v.flatten(validatedFields.issues).nested,
        success: false,
      };
    }

    const { name, email, password } = validatedFields.output;

    const avatar = generateAvatar(name);

    const response = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        image: avatar,
      },
      asResponse: true,
    });

    if (response.ok) {
      return { message: 'Регистрация выполнена успешно', success: true };
    } else {
      const errorData = await response.json();

      // Проверка на существующего пользователя
      if (
        errorData.message?.includes('already exists') ||
        errorData.message?.includes('User already exists') ||
        errorData.message?.includes('duplicate')
      ) {
        return { message: 'Пользователь с таким email уже существует', success: false };
      }

      // Проверка на некорректный email
      if (
        errorData.message?.includes('Invalid email') ||
        errorData.message?.includes('email format') ||
        errorData.message?.includes('invalid email')
      ) {
        return { message: 'Некорректный email адрес', success: false };
      }

      // Проверка требований к паролю
      if (
        errorData.message?.includes('Password') ||
        errorData.message?.includes('password') ||
        errorData.message?.includes('weak')
      ) {
        return { message: 'Пароль не соответствует требованиям безопасности', success: false };
      }

      // Проверка на отсутствующие обязательные поля
      if (
        errorData.message?.includes('required') ||
        errorData.message?.includes('missing') ||
        errorData.message?.includes('field')
      ) {
        return { message: 'Все поля обязательны для заполнения', success: false };
      }

      // Проверка на проблемы с базой данных
      if (
        errorData.message?.includes('database') ||
        errorData.message?.includes('connection') ||
        errorData.message?.includes('timeout')
      ) {
        return { message: 'Проблема с доступом к базе данных', success: false };
      }

      // Проверка на превышение лимита запросов
      if (
        errorData.message?.includes('rate limit') ||
        errorData.message?.includes('too many') ||
        errorData.message?.includes('throttle')
      ) {
        return { message: 'Слишком много попыток регистрации. Попробуйте позже', success: false };
      }

      // Проверка на проблемы с email верификацией
      if (
        errorData.message?.includes('verification') ||
        errorData.message?.includes('verify email')
      ) {
        return { message: 'Проблема с отправкой письма подтверждения', success: false };
      }

      return { message: 'Не удалось зарегистрироваться', success: false };
    }
  } catch (error) {
    console.error('SignUp error:', error);

    // Обработка APIError из Better Auth
    if (error instanceof APIError) {
      switch (error.status) {
        case 400:
          return { message: 'Некорректные данные для регистрации', success: false };
        case 401:
          return { message: 'Неавторизованный запрос', success: false };
        case 403:
          return { message: 'Регистрация запрещена', success: false };
        case 409:
          return { message: 'Пользователь с таким email уже существует', success: false };
        case 422:
          return { message: 'Ошибка валидации данных', success: false };
        case 429:
          return { message: 'Слишком много попыток регистрации. Попробуйте позже', success: false };
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

    return {
      message: 'Не удалось зарегистрироваться',
      success: false,
    };
  }
};
