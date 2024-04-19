import { FormDataLogin, ResponseUsuario } from './userType';
import {domain} from '../../config/domain.ts'

const BACKEND_URL = `${domain}/auth/login`;

const serviceLogin = async (data: FormDataLogin): Promise<ResponseUsuario> => {

    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};

export { serviceLogin };