import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { FormDataLogin, ResponseUsuario } from './userType';
import { serviceLogin } from './serviceLogin.ts';

export default function useLogin() {

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');
    const [messageSuccess, setMessageSuccess] = useState<string>('');

    const Logar = async () => {

        if (user !== '' && password !== '') {

            const formData: FormDataLogin = {
                login: user,
                password: password
            }

            try {
                const response: ResponseUsuario = await serviceLogin(formData);

                if (response.statusCode === 200 && response.token !== null) {
                    localStorage.setItem("token", response.token)
                    navigate('/');
                    setMessageSuccess('Login realizado com sucesso.');
                    setShowAlert(true);
                }
                else {
                    setMessageError('Usuário ou senha Invalido');
                    setShowAlert(true);
                }
            } catch (err) {
                //console.log(err)
                setMessageError('Ocorreu um erro ao fazer login.');
                setShowAlert(true);
            }
        }
        else {
            setMessageError('Por favor, preencha todos os campos.');
            setShowAlert(true);
            return;
        }
    };

    const handleUsuarioChange = (event) => {
        setUser(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setPassword(event.target.value);
    };

    const closeAlert = () => {
        setShowAlert(false);
        setMessageError('');
        setMessageSuccess('');
    };

    return {
        usuario: user,
        senha: password,
        handleUsuarioChange,
        handleSenhaChange,
        Logar,
        showAlert,
        messageError,
        messageSuccess,
        closeAlert
    };
}