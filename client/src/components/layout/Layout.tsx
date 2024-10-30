import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

// const Header = lazy(() => import('../../components/layout/Header'));
const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* <header className="hidden sm:block p-4"> */}
            {/* <Header /> */}
            {/* </header> */}
            <main className="">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
