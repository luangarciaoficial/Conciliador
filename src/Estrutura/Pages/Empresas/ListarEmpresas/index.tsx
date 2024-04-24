import React from "react";
import '../../pagina.css';
import '../../Tabela.css'
import './ListarEmpresa.css'
import { useTema } from '../../../Tema/index.tsx';
import { Link, useLocation } from "react-router-dom";
import useListarEmpresa from "./useListarEmpresas.ts";
import formatarCampoCnpj from "../../../utils/FormatarCnpj/index.ts";
import EditarEmpresas from "../EditarEmpresas/index.tsx";
import useModal from "../../../utils/Modal/modal.ts";

const ListarEmpresa = () => {
    const { colorTextosTransparentes, colorBorda, colorBotoes, colorFundo, colorTextos, colorFundoBox, colorLinhasTabela, colorTabela, colorTextoBox } = useTema();
    const location = useLocation();
    const { filtro, empresas, filtrarEmpresas, handleFiltroChange } = useListarEmpresa()
    const { formatarCNPJ } = formatarCampoCnpj()
    const { openModal, showModal, closeModal } = useModal();

    return (
        <div className="boxPagina" >
            <div className="divTitlePagina" style={{ borderColor: colorBorda }}>
                <h1 style={{ color: colorTextoBox }}>Empresas</h1>
            </div>
            <div className="navigatePages">
                <Link to={'/Empresas/criarempresa'} className={`itemNavigatePages ${location.pathname === '/Empresas/criarempresa' ? 'active' : ''}`} style={{ color: colorTextosTransparentes, borderColor: colorBorda }}>Adicionar empresas</Link>
                <Link to={'/Empresas/listarempresas'} className={`itemNavigatePages itemNavigatePadding ${location.pathname === '/Empresas/listarempresas' ? 'active' : ''}`} style={{ color: colorTextosTransparentes, borderColor: colorBorda }}>Listar empresas</Link>
            </div>
            <div className="boxListar" style={{ backgroundColor: colorFundoBox }}>
                <div className="boxFiltro">
                    <p style={{ color: colorTextoBox }}>Filtrar</p>
                    <input style={{ color: colorTextoBox }} className="Filtrar" type="text" value={filtro} onChange={handleFiltroChange} />
                </div>
                <table className="BoxTabela">
                    <thead className="topTabela">
                        <tr >
                            <th style={{ color: colorTextoBox, backgroundColor: colorTabela, width: '160px' }}>CNPJ</th>
                            <th style={{ color: colorTextoBox, backgroundColor: colorTabela }}>Empresa</th>
                            <th style={{ color: colorTextoBox, backgroundColor: colorTabela, width: '55px' }}> </th>
                        </tr>
                    </thead>
                    <tbody className="mainTabela">
                        {filtrarEmpresas(empresas).map((empresa, index) => (
                            <tr key={index}>
                                <td style={{ color: colorTextoBox, backgroundColor: colorLinhasTabela }}>{formatarCNPJ(empresa.cnpj)}</td>
                                <td style={{ color: colorTextoBox, backgroundColor: colorLinhasTabela }}>{empresa.razaoSocial}</td>
                                <td style={{ color: colorTextoBox, backgroundColor: colorLinhasTabela }}>
                                    <button onClick={openModal} style={{ backgroundColor: colorBotoes }}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && <EditarEmpresas closeModal={closeModal} />}
        </div>
    );
};

export default ListarEmpresa;
