import { useToast } from '../../hooks/use-toast';
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from '../../components/ui/toast';
import { CircleAlert, CircleCheck } from 'lucide-react';

export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({
                id,
                title,
                description,
                action,
                variant,
                ...props
            }) {
                return (
                    <Toast key={id} {...props}>
                        <div className="flex gap-4 justify-center items-center">
                            {variant === 'danger' && (
                                <CircleAlert
                                    className="text-red-500"
                                    size={28}
                                />
                            )}
                            {variant === 'success' && (
                                <CircleCheck
                                    className="text-green-500"
                                    size={28}
                                />
                            )}
                            <div className="grid ">
                                {title && <ToastTitle>{title}</ToastTitle>}
                                {description && (
                                    <ToastDescription>
                                        {description}
                                    </ToastDescription>
                                )}
                            </div>
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
