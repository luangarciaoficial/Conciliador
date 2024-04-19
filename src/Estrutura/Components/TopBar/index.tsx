import React, { useState, useRef, useEffect } from "react";
import './TopBar.css'
import useTopBar from "./useTopBar.ts";
import useLogout from "../../Auth/Logout/useLogout.ts";
import { useTema } from "../../Tema/index.tsx";
import { RiDoorOpenLine } from "react-icons/ri";
import { PiGearSixLight } from "react-icons/pi";
import { FaRegMoon } from "react-icons/fa";
import { PiSunBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const TopBar = () => {
    const { logout } = useLogout()

    const { colorFundoBox ,colorActiveMenu, redTexto, redIcons, colorBorda, colorFundo, colorTextos, selecionarTema, toggleTema, colorTextosTransparentes, colorIconsTransparente } = useTema()

    const {inputRef, inputDoSelecionarEmpresa, handleInputChange, empresaSelecionada, filtroEmpresas, dropdownRef, isOpen, empresasFiltradas, selecioneiEmpresa} = useTopBar()

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

    return (
        <div className="TopBarDiv" style={{borderColor: colorBorda}}>
            <div className="boxSelecionar" ref={inputRef}>
                <div>
                    <span className="selecionaEmpresaText" style={{color: colorTextosTransparentes}}>Selecione uma empresa</span>
                </div>

                <div>
                    <div className="options-wrapper">
                        <input
                            type="text"
                            className="selected-option"
                            onClick={() => inputDoSelecionarEmpresa()}
                            onChange={handleInputChange}
                            value={empresaSelecionada || filtroEmpresas}
                            style={{backgroundColor: colorFundo, color: colorTextosTransparentes, borderColor: colorBorda}}
                        />
                        {isOpen && (
                            <ul className="options-list" ref={dropdownRef}>
                                {empresasFiltradas.map((empresa, index) => (
                                    <li style={{color: colorTextosTransparentes}} key={index} onClick={() => selecioneiEmpresa(empresa)}>{empresa}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

            </div>

            <div className="boxOptions">
                {selecionarTema &&
                    <FaRegMoon style={{color: colorIconsTransparente}} onClick={() => toggleTema()} className="IconConfig" />
                }
                {selecionarTema === false &&
                    <PiSunBold style={{color: colorIconsTransparente}} onClick={() => toggleTema()} className="IconConfig" />
                }
                <div className="divEnginer" ref={dropdownNode}>
                    <PiGearSixLight style={{color: colorIconsTransparente}} onClick={dropdownAberto ? fecharDropdown : abrirDropdown} className="IconEnginerConfig" />
                    {dropdownAberto && (
                        <ul style={{backgroundColor: colorFundoBox}} className="dropdown-menu">
                            <Link className="ItemBoxPerfil" to={'/Empresas/listarempresas'} style={{color: colorTextos}} onClick={() => fecharDropdown()}>Empresa</Link>
                            <Link className="ItemBoxPerfil" to={'/Usuarios/listarusuario'} style={{color: colorTextos}} onClick={() => fecharDropdown()}>Usuários</Link>
                        </ul>
                    )}
                </div>
                <div className="exitConfig" onClick={() => logout()}>
                    <RiDoorOpenLine style={{color: redIcons}} className="IconConfigExit"/>
                    <span style={{color: redTexto}}>Sair</span>
                </div>
            </div>
        </div>
    )
}

export default TopBar