import { toast } from '../hooks/use-toast';

export const errorToast = (description: string) =>
    toast({
        variant: 'danger',
        title: 'Something went wrong',
        description,
    });
