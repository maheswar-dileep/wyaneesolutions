import { ObjectId } from "mongoose";

export interface IUser {
    _id?: ObjectId;
    username: string;
    email: string;
    password: string;
    role?: "USER" | "ADMIN";
    isDemoUser?: boolean;
    demoTime?: string;
    demoEndDate?: Date;
    refreshToken?: string;
}
