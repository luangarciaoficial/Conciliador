import React, { useState } from "react"
import '../pagina.css'
import { useTema } from '../../../Tema/index.tsx'
import { Link, useLocation } from "react-router-dom"
import useListarUsuarios from "./useListarUsuarios.ts"
import EditarUsuario from '../EditarUsuario/index.tsx'
import useModal from "../../../utils/Modal/modal.ts"

const ListarUsuarios = () => {

    const location = useLocation();
    const { colorTextosTransparentes, colorBorda, colorBotoes, colorFundoBox, colorTextoBox, colorTabela, colorLinhasTabela } = useTema()
    const { usuarios, filtro, filtrarUsuario, handleFiltroChange } = useListarUsuarios()
    const { openModal, showModal, closeModal } = useModal();


    return (
        <div className="boxPagina" style={{ backgroundColor: colorFundoBox }}>
            <div className="divTitlePagina" style={{ borderColor: colorBorda }}>
                <h1 style={{ color: colorTextoBox }}>Usuários</h1>
            </div>
            <div className="navigatePages">
                <Link to={'/Usuarios/criarusuario'} className={`itemNavigatePages ${location.pathname === '/Usuarios/criarusuario' ? 'active' : ''}`} style={{ color: colorTextoBox, borderColor: colorBorda }}>Adicionar Usuário</Link>
                <Link to={'/Usuarios/listarusuario'} className={`itemNavigatePages itemNavigatePadding ${location.pathname === '/Usuarios/listarusuario' ? 'active' : ''}`} style={{ color: colorTextoBox, borderColor: colorBorda }}>Listar Usuários</Link>
            </div>
            <div className="boxListar" style={{ backgroundColor: colorFundoBox }}>
                <div className="boxFiltro">
                    <p style={{ color: colorTextoBox }}>Filtrar</p>
                    <input style={{ borderColor: colorBorda, color: colorTextoBox }} className="Filtrar" type="text" value={filtro} onChange={handleFiltroChange} />
                </div>
                <table className="BoxTabela">
                    <thead className="topTabela">
                        <tr>
                            <th style={{ color: colorTextoBox, backgroundColor: colorTabela, width: '300px' }}>Nome</th>
                            <th style={{ color: colorTextoBox, backgroundColor: colorTabela }}>E-mail</th>
                            <th style={{ color: colorTextoBox, backgroundColor: colorTabela, width: '55px' }}> </th>
                        </tr>
                    </thead>
                    <tbody className="mainTabela">
                        {/* Mapeando a lista de empresas filtrada para gerar as linhas da tabela */}
                        {filtrarUsuario(usuarios).map((usuario, index) => (
                            <tr key={index}>
                                <td style={{ backgroundColor: colorLinhasTabela, color: colorTextoBox }}>{usuario.nome}</td>
                                <td style={{ backgroundColor: colorLinhasTabela, color: colorTextoBox }}>{usuario.email}</td>
                                <td style={{ backgroundColor: colorLinhasTabela, color: colorTextoBox }}>
                                    <button onClick={openModal} style={{ backgroundColor: colorBotoes }}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && <EditarUsuario closeModal={closeModal} />}
        </div>
    )

}

export default ListarUsuarios