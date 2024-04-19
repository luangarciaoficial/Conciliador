// useAuthHeader.tsx
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useValidation } from '../Auth/validation/useValidation.ts';

export const useAuthHeader = (): Record<string, string> => {
    const navigate = useNavigate();
    const isValidToken = useValidation();

    if (!isValidToken) {
        localStorage.clear();
        navigate('/login');
    }

    const token = localStorage.getItem('accessToken');

    return useMemo(() => {
        if (token) {
            return { Authorization: `Bearer ${token}` }
        }
        return {} as Record<string, string>;
    }, [token]);
}
