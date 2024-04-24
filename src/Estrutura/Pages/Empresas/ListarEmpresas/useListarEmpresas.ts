import { useState } from "react";

const useListarEmpresa = () => {

    const [filtro, setFiltro] = useState("");
    
  
    
    // Exemplo de lista de empresas
    const empresas = [
        { cnpj: '38433999000135', razaoSocial: 'Empresa A' },
        { cnpj: '38433999000136', razaoSocial: 'Empresa B' },
        { cnpj: '38433999000137', razaoSocial: 'Empresa C' },
        { cnpj: '38433999000135', razaoSocial: 'Empresa A' },
    ];
    
    // Função para filtrar as empresas
    const filtrarEmpresas = (empresas) => {
        return empresas.filter(empresa => {
            return (
                empresa.cnpj.includes(filtro) ||
                empresa.razaoSocial.toLowerCase().includes(filtro.toLowerCase())
            );
        });
    };
    
    // Manipulador de evento para atualizar o filtro
    const handleFiltroChange = (event) => {
        setFiltro(event.target.value);
    };

    return{
        filtro, empresas, filtrarEmpresas, handleFiltroChange
    }
}

export default useListarEmpresa
