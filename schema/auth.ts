import * as v from 'valibot';

export const SignupFormSchema = v.object({
  name: v.pipe(v.string(), v.trim(), v.minLength(2, 'Имя должно содержать не менее 2 символов')),
  email: v.pipe(v.string(), v.trim(), v.email('Пожалуйста, введите корректный email')),
  password: v.pipe(
    v.string(),
    v.trim(),
    v.minLength(8, 'Пароль должен содержать не менее 8 символов'),
    v.regex(/[a-zA-Z]/, 'Пароль должен содержать хотя бы одну букву'),
    v.regex(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру'),
  ),
});

export const LoginFormSchema = v.object({
  email: v.pipe(v.string(), v.email('Пожалуйста, введите корректный email')),
  password: v.pipe(v.string(), v.minLength(1, 'Поле пароля не может быть пустым')),
});
