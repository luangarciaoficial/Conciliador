import React from "react";
import '../../pagina.css';
import "../../camposTextos.css";
import { useTema } from '../../../Tema/index.tsx'
import { Link, useLocation } from "react-router-dom";


const CriarEmpresa = () => {
    const { colorTextosTransparentes, colorTextoBox, colorFundoBox, colorBorda, colorBotoes, colorTextBotoes, colorTextos } = useTema();
    const location = useLocation();

    return (
        <div className="boxPagina" style={{backgroundColor: colorFundoBox}}>
            <div className="divTitlePagina">
                <h1 style={{color: colorTextoBox}}>Empresas</h1>
            </div>
            <div className="navigatePages">
                <Link to={'/Empresas/criarempresa'} className={`itemNavigatePages ${location.pathname === '/Empresas/criarempresa' ? 'active' : ''}`} style={{ color: colorTextos, borderColor: colorBorda }}>Adicionar empresas</Link>
                <Link to={'/Empresas/listarempresas'} className={`itemNavigatePages itemNavigatePadding ${location.pathname === '/Empresas/listarempresas' ? 'active' : ''}`} style={{ color: colorTextos, borderColor: colorBorda }}>Listar empresas</Link>
            </div>
            <div className="boxCadastro" style={{ backgroundColor: colorFundoBox }}>
                <div className="divTexto">
                    <div className="CampoTexto">
                        <label style={{color: colorTextoBox}}>CNPJ</label>
                        <input style={{color: colorTextoBox, backgroundColor: colorFundoBox}} type="text" />
                    </div>
                    <div className="CampoTexto CampoTextoMargin">
                        <label style={{color: colorTextoBox}}>Nome Fantasia</label>
                        <input style={{color: colorTextoBox, backgroundColor: colorFundoBox}} type="text" />
                    </div>
                </div>
                <div className="divTexto">
                    <div className="botaoCadastrar">
                        <button style={{ backgroundColor: colorBotoes, color: colorTextBotoes }}>
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriarEmpresa;