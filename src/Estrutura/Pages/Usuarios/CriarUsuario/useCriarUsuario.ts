import { useEffect, useRef, useState } from "react";

const useCriarUsuario = () => {

    const empresas = [
        { cnpj: "12345678943545", nome: "Empresa" },
        { cnpj: "95482124589742", nome: "Empresa 2" },
        { cnpj: "95482124589743", nome: "Empresa 3" },
        { cnpj: "95482124589743", nome: "Empresa 3" },
        { cnpj: "95482124589743", nome: "Empresa 3" },
        { cnpj: "95482124589743", nome: "Empresa 3" },
        { cnpj: "95482124589743", nome: "Empresa 3" },
        { cnpj: "95482124589743", nome: "Empresa 3" },
        { cnpj: "95482124589743", nome: "Empresa 3" },
        { cnpj: "95482124589743", nome: "Empresa 3" },
        // Adicione mais empresas conforme necessário
    ];

    const [isOpen, setOpen] = useState<boolean>(false)
    const [empresaUsuarioSeleconada, setEmpresaUsuarioSeleconada] = useState<string>()
    const [filtro, setFiltro] = useState<string>('')
    const inputRef = useRef(null)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target) && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen])

    const inputDoSelecionarEmpresa = () => {
        setEmpresaUsuarioSeleconada('')
        setFiltro('')
        setOpen(!isOpen)
    }

    const selecioneiEmpresa = (nomeEmpresa) => {
        setEmpresaUsuarioSeleconada(nomeEmpresa)
        setOpen(false)
    }

    const handleInputChange = (e) => {
        setFiltro(e.target.value)
    }

    const empresasFiltradas = empresas.filter(empresa =>
        empresa.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    return{
        empresaUsuarioSeleconada, isOpen, filtro, inputDoSelecionarEmpresa,
        selecioneiEmpresa, handleInputChange, empresasFiltradas, empresas,
        dropdownRef
    }

}

export default useCriarUsuario
