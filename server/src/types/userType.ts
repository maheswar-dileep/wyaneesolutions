import { ObjectId } from "mongoose";

export interface IUser {
    _id?: ObjectId;
    username: string;
    email: string;
    password: string;
    role?: "USER" | "ADMIN";
    isActive?: boolean;
    isDeclined?: boolean;
    refreshToken?: string;
}
