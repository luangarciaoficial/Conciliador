const formatarCampoCnpj = () => {
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
    return {formatarCNPJ}
}

export default formatarCampoCnpj
// Função para formatar CNPJ
