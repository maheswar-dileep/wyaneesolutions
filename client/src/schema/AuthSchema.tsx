import { z } from 'zod';

export const LoginSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email('Invalid email format')
        .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i, {
            message: 'Invalid email format',
        }),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .max(50, 'Password must be at most 50 characters long'),
});

export const RegisterSchema = z.object({
    username: z
        .string({ required_error: 'Username is required' })
        .min(2, 'Username must be at least 2 characters long')
        .max(12, 'Username must be at least 12 characters long'),
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email('Invalid email format')
        .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i, {
            message: 'Invalid email format',
        }),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .max(50, 'Password must be at most 50 characters long'),
});
