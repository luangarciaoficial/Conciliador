import React, { useState } from "react"
import '../pagina.css'
import { useTema } from '../../../Tema/index.tsx'
import { Link, useLocation } from "react-router-dom"
import useListarUsuarios from "./useListarUsuarios.ts"

const ListarUsuarios = () => {

    const location = useLocation();
    const { colorTextosTransparentes, colorBorda, colorBotoes, colorFundo } = useTema()
    const {usuarios, filtro, filtrarUsuario, handleFiltroChange} = useListarUsuarios()


    return (
        <div className="boxPagina">
            <div className="divTitlePagina" style={{ borderColor: colorBorda }}>
                <h1>Usuários</h1>
            </div>
            <div className="navigatePages">
                <Link to={'/Usuarios/criarusuario'} className={`itemNavigatePages ${location.pathname === '/Usuarios/criarusuario' ? 'active' : ''}`} style={{ color: colorTextosTransparentes }}>Adicionar Usuário</Link>
                <Link to={'/Usuarios/listarusuario'} className={`itemNavigatePages itemNavigatePadding ${location.pathname === '/Usuarios/listarusuario' ? 'active' : ''}`} style={{ color: colorTextosTransparentes }}>Listar Usuários</Link>
            </div>
            <div className="boxListar" style={{backgroundColor: colorFundo}}>
                <div className="boxFiltro">
                    <p >Filtrar</p>
                    <input className="Filtrar" type="text" value={filtro} onChange={handleFiltroChange} />
                </div>
                <table className="BoxTabela">
                    <thead className="topTabela">
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="mainTabela">
                        {/* Mapeando a lista de empresas filtrada para gerar as linhas da tabela */}
                        {filtrarUsuario(usuarios).map((usuario, index) => (
                            <tr key={index}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                                <td><button style={{ backgroundColor: colorBotoes }}>Editar</button></td>
                                <td><button style={{ backgroundColor: colorBotoes }}>Excluir</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default ListarUsuarios