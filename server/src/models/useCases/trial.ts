import { getDisableDate } from '../../utils/formatDate';
import User from '../entites/users';

export const update = async (id: string) => {
    try {
        const newUser = await User.updateOne(
            { _id: id },
            {
                $set: {
                    demoEndDate: getDisableDate(new Date()),
                },
            }
        ).lean();
        return newUser;
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return 'An unexpected error occurred';
    }
};
