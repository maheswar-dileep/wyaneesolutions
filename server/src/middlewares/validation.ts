import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';
import { responseCodes } from '../configs/responseCodes';
import { error } from '../configs/responseConfig';

export const validateData = (schema: z.ZodObject<any, any>) => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            await schema.parseAsync({
                ...req.body,
                ...req.query,
                ...req.params,
            });
            next();
        } catch (err) {
            if (err instanceof ZodError) {
                const errorMessages = err.errors.map((issue: any) => ({
                    field: `${issue.path.join('.')}`,
                    message: `${issue.message}`,
                }));
                res.status(responseCodes.badRequest).json(
                    error({
                        statusCode: responseCodes.badRequest,
                        message: 'Invalid data',
                        data: errorMessages,
                    })
                );
            } else {
                next(err);
            }
        }
    };
};
