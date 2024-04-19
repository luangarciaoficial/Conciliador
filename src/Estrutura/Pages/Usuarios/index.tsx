import React from "react"
import './pagina.css'
import {useTema} from '../../Tema/index.tsx'
import { Link } from "react-router-dom"

const Usuarios = () => {

    const {colorTextosTransparentes, colorBorda} = useTema()

    return (
        <div className="boxPagina">
            <div className="divTitlePagina" style={{borderColor: colorBorda}}>
                <h1>Usuários</h1>
            </div>
            <div className="navigatePages">
                <Link to={'/Usuarios/criarusuario'} className="itemNavigatePages" style={{color: colorTextosTransparentes}}>Adicionar Usuário</Link>
                <Link to={'/Usuarios/listarusuario'} className="itemNavigatePages itemNavigatePadding" style={{color: colorTextosTransparentes}}>Listar Usuários</Link>
            </div>
        </div>
    )

}

export default Usuarios