import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import * as user from '../models/useCases/users';
import { success, error } from '../configs/responseConfig';
import { responseCodes } from '../configs/responseCodes';
import {
    generateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
} from '../utils/generateTokens';
import { IUser } from '../types/userType';

export const createAccount = async (req: Request, res: Response) => {
    try {
        const { username, email, password }: IUser = req.body;
        const userExists = await user.findOne(email);

        if (userExists)
            return res.send(
                error({
                    statusCode: responseCodes.unAuthorized,
                    message: 'User already exists',
                })
            );

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: any = await user.create({
            username,
            email,
            password: hashedPassword,
        });

        delete newUser.password;

        return res.status(responseCodes.success).send(
            success({
                statusCode: responseCodes.success,
                message: 'User created successfully',
                data: newUser,
            })
        );
    } catch (err) {
        return res.send(
            error({
                statusCode: responseCodes.serverError,
            })
        );
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password }: Pick<IUser, 'email' | 'password'> = req.body;

        const userData: string | IUser | null = await user.findOne(email);

        if (typeof userData === 'string')
            return res.send(
                error({
                    statusCode: responseCodes.serverError,
                    message: userData,
                })
            );

        if (!userData)
            return res.send(
                error({
                    statusCode: responseCodes.notFound,
                    message: 'User not found',
                })
            );

        const isValidPassword = await bcrypt.compare(
            password,
            userData.password
        );
        if (!isValidPassword)
            return res.send(
                error({
                    statusCode: responseCodes.unAuthorized,
                    message: 'Invalid password',
                })
            );

        const accessToken = await generateAccessToken(userData);
        const refreshToken = await generateRefreshToken(userData);

        await user.update({ _id: userData._id, refreshToken });
        return res.send(
            success({
                statusCode: responseCodes.success,
                message: 'User login successful',
                data: {
                    accessToken,
                    refreshToken,
                    username: userData.username,
                    email: userData.email,
                    role: userData.role,
                    id: userData._id,
                },
            })
        );
    } catch (err) {
        console.log(err);
        return res.send(
            error({
                statusCode: responseCodes.serverError,
            })
        );
    }
};

export const getRefreshToken = async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.body;
        const isValidRefreshToken: IUser = (await verifyRefreshToken(
            refreshToken
        )) as IUser;
        if (!isValidRefreshToken)
            return res.send(
                error({
                    message: 'Invalid Token',
                    statusCode: responseCodes.unAuthorized,
                })
            );

        const accessToken = await generateAccessToken({
            _id: isValidRefreshToken._id,
            username: isValidRefreshToken.username,
            email: isValidRefreshToken.email,
        });

        return res.send(
            success({
                message: 'Refresh Token Generated Successfully',
                statusCode: responseCodes.success,
                data: {
                    accessToken,
                },
            })
        );
    } catch (err) {
        console.log(err);
        return res.send(
            error({
                statusCode: responseCodes.serverError,
            })
        );
    }
};
