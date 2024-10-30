import { IUser } from '../../types/userType';
import User from '../entites/users';

export const create = async (data: IUser) => {
    try {
        const newUser = await User.create(data);
        return newUser.toObject();
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return 'An unexpected error occurred';
    }
};

export const findOne = async (
    email: string
): Promise<IUser | null | string> => {
    try {
        return (await User.findOne({
            email: email,
        }).lean()) as IUser | null;
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return 'An unexpected error occurred';
    }
};

export const update = async (data: Partial<IUser>) => {
    try {
        return await User.updateOne({ _id: data._id }, { $set: { data } });
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return 'An unexpected error occurred';
    }
};
