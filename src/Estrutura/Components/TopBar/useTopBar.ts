import { useEffect, useRef, useState } from "react";


const useTopBar = () => {
    const empresas = ["Empresa 1", "Empresa 2", "Empresa 3"]; // Lista de empresas

    const [isOpen, setOpen] = useState<boolean>(false)
    const [empresaSelecionada, setEmpresaSelecionada] = useState<string>('')
    const [filtroEmpresas, setFiltroEmpresas] = useState<string>('')
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

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
    }, []);

    const inputDoSelecionarEmpresa = () => {
        setEmpresaSelecionada('')
        setFiltroEmpresas('')
        setOpen(!isOpen)
    }

    const selecioneiEmpresa = (empresa) => {
        setEmpresaSelecionada(empresa)
        setOpen(false)
    }

    const handleInputChange = (e) => {
        setFiltroEmpresas(e.target.value)
    }

    const empresasFiltradas = empresas.filter(empresa =>
        empresa.toLowerCase().includes(filtroEmpresas.toLowerCase())
    );



    //icone engrenagem drop Down
    const [dropdownAberto, setDropdownAberto] = useState(false);

    const abrirDropdown = () => {
        setDropdownAberto(true);
    };

    const fecharDropdown = () => {
        setDropdownAberto(false);
    };

    // Ref para o dropdown
    const dropdownNode = useRef(null);

    // Efeito para adicionar event listener ao documento quando o dropdown é aberto
    useEffect(() => {
        if (dropdownAberto) {
            // Função para fechar o dropdown quando clicar fora dele
            const handleClickOutside = (event) => {
                if (dropdownNode.current && !dropdownNode.current.contains(event.target)) {
                    fecharDropdown();
                }
            };
            // Adiciona o event listener ao documento
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Remove o event listener ao desmontar o componente
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [dropdownAberto]);


    return {
        inputRef, inputDoSelecionarEmpresa, handleInputChange, empresaSelecionada, filtroEmpresas, dropdownRef, isOpen, empresasFiltradas, selecioneiEmpresa,
        abrirDropdown, fecharDropdown, dropdownNode, dropdownAberto
    }
}

export default useTopBar