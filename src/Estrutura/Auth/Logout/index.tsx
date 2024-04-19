import React from "react"
import useLogout from "./useLogout"

export function Logout () {

    const {logout} = useLogout()

    return (
        <div className='botaoSair'>
            <button onClick={() => logout()}>Sair</button>
        </div>
    )

}