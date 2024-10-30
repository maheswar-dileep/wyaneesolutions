import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { authState } from '../../state/auth';
import apiClient from '../../config/apiClient';
import { Button } from '../../components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../components/ui/card';
import { LoginSchema } from '../../schema/AuthSchema';
import FormInput from '../../components/atomic/FormInput';
import { ApiResponse } from '../../types/genericResponse';

type loginFormType = z.infer<typeof LoginSchema>;

const Login = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setAuthState] = useRecoilState(authState);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<loginFormType>({
        resolver: zodResolver(LoginSchema),
    });

    const onLogin = async (data: loginFormType) => {
        try {
            const res: ApiResponse<null> = await apiClient.post(
                '/auth/login',
                data
            );

            console.log(res.data, 'updateAuthData');
            if (res.code === 200) {
                setAuthState(res.data);
                return navigate('/dashboard');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[90vh]">
            <Card className="lg:w-96 lg:border border-0 shadow-none">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription className="w-full">
                        Don{`'`}t have an account!
                        <Link
                            to="/auth/register"
                            className="ms-1 text-blue-400"
                        >
                            Register.
                        </Link>
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(onLogin)}>
                    <CardContent className="grid gap-4">
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
                            Login
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default Login;
