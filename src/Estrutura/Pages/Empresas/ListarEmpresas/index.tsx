import React, { useState } from "react";
import '../pagina.css';
import '../Tabela.css'
import './ListarEmpresa.css'
import { useTema } from '../../../Tema/index.tsx';
import { Link, useLocation } from "react-router-dom";
import useListarEmpresa from "./useListarEmpresas.ts";

const ListarEmpresa = () => {
    const { colorTextosTransparentes, colorBorda, colorBotoes, colorFundo } = useTema();
    const location = useLocation();
    const {filtro, formatarCNPJ, empresas, filtrarEmpresas, handleFiltroChange} = useListarEmpresa()
   

    return (
        <div className="boxPagina">
            <div className="divTitlePagina" style={{ borderColor: colorBorda }}>
                <h1>Empresas</h1>
            </div>
            <div className="navigatePages">
                <Link to={'/Empresas/criarempresa'} className={`itemNavigatePages ${location.pathname === '/Empresas/criarempresa' ? 'active' : ''}`} style={{ color: colorTextosTransparentes }}>Adicionar empresas</Link>
                <Link to={'/Empresas/listarempresas'} className={`itemNavigatePages itemNavigatePadding ${location.pathname === '/Empresas/listarempresas' ? 'active' : ''}`} style={{ color: colorTextosTransparentes }}>Listar empresas</Link>
            </div>
            <div className="boxListar" style={{backgroundColor: colorFundo}}>
                <div className="boxFiltro">
                    <p >Filtrar</p>
                    <input className="Filtrar" type="text" value={filtro} onChange={handleFiltroChange} />
                </div>
                <table className="BoxTabela">
                    <thead className="topTabela">
                        <tr>
                            <th>CNPJ</th>
                            <th>Razão Social</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="mainTabela">
                        {/* Mapeando a lista de empresas filtrada para gerar as linhas da tabela */}
                        {filtrarEmpresas(empresas).map((empresa, index) => (
                            <tr key={index}>
                                <td>{formatarCNPJ(empresa.cnpj)}</td>
                                <td>{empresa.razaoSocial}</td>
                                <td><button style={{ backgroundColor: colorBotoes }}>Editar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListarEmpresa;
