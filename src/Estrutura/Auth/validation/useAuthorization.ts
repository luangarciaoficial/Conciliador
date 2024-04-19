import { useState } from "react"


export const useAuthorization = () => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const getAuthorizationHeaders = () => {
        if (token) {
            return {
                'Authorization': `Bearer ${token}`
            };
        } else {
            return {};
        }
    }

    return { getAuthorizationHeaders }
}