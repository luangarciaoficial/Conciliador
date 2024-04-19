import React from "react"
import '../pagina.css'
import {useTema} from '../../../Tema/index.tsx'
import { Link, useLocation } from "react-router-dom"
import GenericCadastro from "../../../Components/GenericCadastro/index.tsx"
import camposType from "./camposType.ts"

const CriarUsuarios = () => {

    const {colorTextosTransparentes, colorBorda, colorFundoOptions} = useTema()

    const location = useLocation();

    const {camposCadastro} = camposType()

    return (
        <div className="boxPagina">
            <div className="divTitlePagina" style={{borderColor: colorBorda}}>
                <h1>Usuários</h1>
            </div>
            <div className="navigatePages">
            <Link to={'/Usuarios/criarusuario'} className={`itemNavigatePages ${location.pathname === '/Usuarios/criarusuario' ? 'active' : ''}`} style={{ color: colorTextosTransparentes }}>Adicionar Usuário</Link>
                <Link to={'/Usuarios/listarusuario'} className={`itemNavigatePages itemNavigatePadding ${location.pathname === '/Usuarios/listarusuario' ? 'active' : ''}`} style={{ color: colorTextosTransparentes }}>Listar Usuários</Link>
            </div>
            <div className="boxCadastro" style={{backgroundColor: colorFundoOptions}}>
                <GenericCadastro campos={camposCadastro} />
            </div>
        </div>
    )

}

export default CriarUsuarios