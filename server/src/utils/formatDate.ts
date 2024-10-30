import dayjs from 'dayjs';

export const formatDate = (date: Date): Date => {
    return new Date(dayjs(date).toISOString());
};

export const getDisableDate = (date: Date): Date => {
    return new Date(
        dayjs(date)
            .add(7, 'days') // 7 days is the default duration
            .toISOString()
    );
};
