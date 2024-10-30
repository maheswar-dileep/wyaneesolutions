import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from '../ui/button';
import { useRecoilState } from 'recoil';
import { authState } from '../../state/auth';

const Header = lazy(() => import('../../components/layout/Header'));
const Layout = () => {
    const [_, setAuth] = useRecoilState(authState);

    return (
        <div className="flex flex-col min-h-screen">
            <header className="hidden sm:block p-4 md:flex justify-end">
                <Button
                    onClick={() => {
                        setAuth('');
                        window.location.reload();
                    }}
                >
                    Logout
                </Button>
            </header>
            <main className="">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
