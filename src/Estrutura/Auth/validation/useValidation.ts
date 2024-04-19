import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useValidation = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [isValid, setIsValid] = useState<boolean>(false);

    function validation() {
        if (!token) {
            navigate('/login');
            return false;
        }

        const decoded = jwtDecode(token);
        if (decoded.exp !== undefined) {
            const expirationTime: number = decoded.exp * 1000;
            const currentTime: number = Date.now();
            if (expirationTime < currentTime) {
                navigate('/login');
                return false;
            }
        }
        if (decoded.exp === undefined) {
            navigate('/login');
            return false;
        }

        const tokenParts: string[] = token.split('.');
        if (tokenParts.length !== 3) {
            navigate('/login');
            return false;
        }

        return true;
    }

    useEffect(() => {
        const isValidToken = validation();
        setIsValid(isValidToken);
    }, [token])

    return {isValid};
}