import { Input } from '../ui/input';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = {
    type: string;
    placeholder: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error: string | undefined;
    valueAsNumber?: boolean;
    label: string;
    className: string;
    maxLength?: number;
};

const FormInput = <T extends FieldValues>({
    error,
    type,
    placeholder,
    name,
    register,
    label,
    className,
    maxLength,
    valueAsNumber = false,
}: Props<T>) => {
    return (
        <div className={className}>
            <label htmlFor={placeholder}>{label}</label>
            <Input
                maxLength={maxLength && maxLength}
                type={type}
                placeholder={placeholder}
                {...register(name, { valueAsNumber })}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};

export default FormInput;
