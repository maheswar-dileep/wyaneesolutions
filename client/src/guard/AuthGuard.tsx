import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

type AuthGuardProps = {
    children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, isAdmin } = useAuth();

    const [checked, setChecked] = useState(false);

    const check = useCallback(() => {
        if (!isAuthenticated) {
            if (location.pathname.startsWith('/auth')) return setChecked(true);
            navigate('/auth/login', { replace: true });
        }
        if (isAuthenticated && !isAdmin) {
            if (location.pathname.startsWith('/dashboard'))
                return setChecked(true);
            navigate('/dashboard', { replace: true });
        }

        setChecked(true);
    }, [isAdmin, isAuthenticated, navigate, location.pathname]);

    useEffect(() => {
        check();
    }, [check]);

    if (!checked) {
        return null;
    }

    return <>{children}</>;
}
