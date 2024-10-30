import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from '../components/ui/toaster';

const Layout = lazy(() => import('../components/layout/Layout'));
const Home = lazy(() => import('../pages/dashboard/Home'));
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Toaster />
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
