import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../state/auth';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [user, setUser] = useRecoilState(authState);
    const token = user?.accessToken;
    const role = user?.role;

    useEffect(() => {
        if (token) {
            setIsAuthenticated(true);
            setIsAdmin(role.toLowerCase() === 'admin');
        }
    }, [role, token]);

    return {
        isAuthenticated,
        isAdmin,
    };
};
