import React from 'react';
import './Login.css';
import useLogin from './useLogin.ts';
import Alert from '../../Alert/Alert.tsx'; // Importe o componente Alert do arquivo correto

const Login = () => {
    const { usuario, senha, handleUsuarioChange, handleSenhaChange, Logar, showAlert, messageError, messageSuccess, closeAlert } = useLogin(); // Obtenha as propriedades do hook useLogin

    return (
        <div className='Login' style={{ backgroundColor: '#250e62' }}>
            <div className='BoxLogin' style={{ backgroundColor: 'white' }}>
                <img className='imgLogoLogin' src="/img/LogoLogin.png" alt="Logo" />
                <div className="form-group">
                    <input
                        type="text"
                        id="Usuário"
                        value={usuario}
                        onChange={handleUsuarioChange}
                        placeholder=" "
                        style={{ backgroundColor: 'white', color: '#250e62' }}
                    />
                    <label htmlFor="cnpj" style={{ backgroundColor: 'white', color: '#250e62' }}>CNPJ</label>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={handleSenhaChange}
                        placeholder=" "
                        style={{ backgroundColor: 'white', color: '#250e62' }}
                    />
                    <label htmlFor="senha" style={{ backgroundColor: 'white', color: '#250e62' }}>Senha</label>
                </div>
                <div className='form-group'>
                    <button className='botaoLogin' onClick={Logar} style={{backgroundColor: '#250e62', color: 'white'}}>Entrar</button>
                </div>
            </div>
            {showAlert && ( 
                <Alert
                    severity={messageError ? 'error' : 'success'} 
                    message={messageError ? messageError : messageSuccess} 
                    onClose={closeAlert}
                />
            )}
        </div>
    );
};

export default Login;