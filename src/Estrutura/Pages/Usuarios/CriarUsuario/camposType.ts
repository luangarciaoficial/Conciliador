const camposType = () => {
    const camposCadastro = [
        { label: "Nome", tipo: "text", },
        { label: "E-mail", tipo: "email" },
        { label: "Usuario", tipo: "text" },
        { label: "Senha", tipo: "password" },
    ];

    return { camposCadastro };
};

export default camposType;