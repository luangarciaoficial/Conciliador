import { useState } from "react";

const useListarEmpresa = () => {

    const [filtro, setFiltro] = useState("");
    
    // Função para formatar CNPJ
    const formatarCNPJ = (cnpj) => {
        // Verifica se o CNPJ possui 14 caracteres
        if (cnpj.length === 14) {
            // Aplica a máscara
            return `${cnpj.substr(0, 2)}.${cnpj.substr(2, 3)}.${cnpj.substr(5, 3)}/${cnpj.substr(8, 4)}-${cnpj.substr(12, 2)}`;
        } else {
            // Se não tiver 14 caracteres, retorna o CNPJ sem formatação
            return cnpj;
        }
    };
    
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
        filtro, formatarCNPJ, empresas, filtrarEmpresas, handleFiltroChange
    }
}

export default useListarEmpresa
