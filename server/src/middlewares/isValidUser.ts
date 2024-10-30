import { Request, Response, NextFunction } from 'express';
import * as user from '../models/useCases/users';
import { IUser } from '../types/userType';

export const isValidUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.body || !req.body.email) {
            return res.status(401).json({
                statusCode: 401,
                message: 'Unauthorized!!',
            });
        }

        const userData: IUser = (await user.findOne(req.body.email)) as IUser;

        if (!userData) {
            return res.status(404).json({
                statusCode: 404,
                message: 'User not found',
            });
        }

        if (
            userData.isDemoUser &&
            userData.demoTime === '7 days' &&
            userData.demoEndDate < new Date()
        ) {
            return res.status(401).json({
                statusCode: 401,
                message: 'Trial expired',
            });
        }

        next();
    } catch (error) {
        console.error('Error in isValidUser middleware:', error);
        res.status(500).json({
            statusCode: 500,
            message: 'Internal server error',
        });
    }
};
