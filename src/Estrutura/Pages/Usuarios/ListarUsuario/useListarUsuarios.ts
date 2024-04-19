import { useState } from "react";


const useListarUsuarios = () => {
    const [filtro, setFiltro] = useState("");
    

    const usuarios = [
        { nome: 'Natan', email: 'natan@teste.com' },
        { nome: 'Luan', email: 'luan@teste.com' },
        { nome: 'Antonio', email: 'antonio@teste.com' },
        { nome: 'Natalia', email: 'natalia@teste.com' },
        { nome: 'Neto', email: 'neto@teste.com' },
    ];

    // Função para filtrar as empresas
    const filtrarUsuario = (usuario) => {
        return usuario.filter(usuario => {
            return (
                usuario.nome.includes(filtro) ||
                usuario.email.toLowerCase().includes(filtro.toLowerCase())
            );
        });
    };

    // Manipulador de evento para atualizar o filtro
    const handleFiltroChange = (event) => {
        setFiltro(event.target.value);
    };

    return{
        usuarios, filtro, filtrarUsuario, handleFiltroChange
    }
}

export default useListarUsuarios