import { Request, Response } from 'express';

import * as trial from '../models/useCases/trial';
import { success, error } from '../configs/responseConfig';
import { responseCodes } from '../configs/responseCodes';

export const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userData = await trial.update(id);

        return res.send(
            success({
                statusCode: responseCodes.success,
                message: 'Trial updated successfully',
                data: userData,
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
