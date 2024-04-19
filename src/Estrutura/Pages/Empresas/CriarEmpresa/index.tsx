import React from "react";
import '../pagina.css';
import { useTema } from '../../../Tema/index.tsx'
import { Link, useLocation } from "react-router-dom";
import GenericCadastro from "../../../Components/GenericCadastro/index.tsx";
import camposType from "./camposType.ts";


const CriarEmpresa = () => {
    const { colorTextosTransparentes, colorBorda, colorFundoOptions, colorBotoes, colorTextBotoes } = useTema();
    const location = useLocation();
    const {camposCadastro} = camposType() 

    return (
        <div className="boxPagina">
            <div className="divTitlePagina">
                <h1>Empresas</h1>
            </div>
            <div className="navigatePages">
                <Link to={'/Empresas/criarempresa'} className={`itemNavigatePages ${location.pathname === '/Empresas/criarempresa' ? 'active' : ''}`} style={{ color: colorTextosTransparentes }}>Adicionar empresas</Link>
                <Link to={'/Empresas/listarempresas'} className={`itemNavigatePages itemNavigatePadding ${location.pathname === '/Empresas/listarempresas' ? 'active' : ''}`} style={{ color: colorTextosTransparentes }}>Listar empresas</Link>
            </div>
            <div className="boxCadastro" style={{backgroundColor: colorFundoOptions}}>
                <GenericCadastro campos={camposCadastro} />
            </div>
        </div>
    );
};

export default CriarEmpresa;