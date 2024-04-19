const camposType = () => {
    const camposCadastro = [
        { label: "CNPJ", tipo: "text", mask: '99.999.999/9999-99' },
        { label: "Razão Social", tipo: "text" },
    ];

    return { camposCadastro };
};

export default camposType;