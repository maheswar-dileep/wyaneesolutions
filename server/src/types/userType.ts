import { ObjectId } from 'mongoose';

export interface IUser {
    _id?: ObjectId;
    username: string;
    email: string;
    password: string;
    role?: 'USER' | 'ADMIN';
    isDemoUser?: boolean;
    demoTime?: string;
    googleId?: string;
    authType: 'google' | 'self';
    demoEndDate?: Date;
    refreshToken?: string;
}
