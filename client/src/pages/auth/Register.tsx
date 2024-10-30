import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import apiClient from '../../config/apiClient';
import { authState } from '../../state/auth';
import { Button } from '../../components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../components/ui/card';
import { RegisterSchema } from '../../schema/AuthSchema';
import FormInput from '../../components/atomic/FormInput';
import { ApiResponse } from '../../types/genericResponse';

type RegisterFormType = z.infer<typeof RegisterSchema>;

const Register = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setAuthState] = useRecoilState(authState);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormType>({
        resolver: zodResolver(RegisterSchema),
    });

    const onRegister = async (data: RegisterFormType) => {
        console.log('🚀 ~ onRegister ~ data:', data);
        try {
            const res: ApiResponse<null> = await apiClient.post(
                '/auth/register',
                data
            );

            if (res.code === 200) {
                setAuthState(res.data);
                return navigate('/login');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[90vh]">
            <Card className="md:w-96 md:border border-0 shadow-none">
                <CardHeader>
                    <CardTitle>Register</CardTitle>
                    <CardDescription className="w-full flex">
                        Already have an account?
                        <Link
                            to="/auth/login"
                            className="ms-1 flex items-center text-blue-400"
                        >
                            Login{' '}
                        </Link>
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(onRegister)}>
                    <CardContent className="grid gap-4">
                        <FormInput
                            className="grid w-full items-center gap-1.5"
                            label="Username"
                            name="username"
                            placeholder="username"
                            type="text"
                            error={errors.username?.message}
                            register={register}
                        />
                        <FormInput
                            className="grid w-full items-center gap-1.5"
                            label="Email"
                            name="email"
                            placeholder="email"
                            type="text"
                            error={errors.email?.message}
                            register={register}
                        />
                        <FormInput
                            className="grid w-full items-center gap-1.5 "
                            label="Password"
                            name="password"
                            placeholder="password"
                            type="password"
                            error={errors.password?.message}
                            register={register}
                        />
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2">
                        <Button type="submit" className="w-full">
                            Register
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default Register;
