import { z } from 'zod';

export const userRegistrationSchema = z.object({
    username: z.string({
        required_error: 'Username is required',
    }),
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email('Invalid email format')
        .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, {
            message: 'Invalid email format',
        }),
    password: z.string({
        required_error: 'Password is required',
    }),
});

export const userLoginSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
        })
        .email()
        .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, {
            message: 'Invalid email format',
        }),
    password: z
        .string({
            required_error: 'Password is required',
        })
        .min(6, { message: 'Password must be at least 6 characters' }),
});
