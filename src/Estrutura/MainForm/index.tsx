import React from 'react';
import './MainBase.css'
import TopBar from '../Components/TopBar/index.tsx';
import SideBar from '../Components/SideBar/index.tsx';
import { useTema } from '../Tema/index.tsx';

interface params {
    children: React.ReactNode;
}

const MainBase: React.FC<params> = ({ children }) => {

    const { colorFundo, colorFundoBox } = useTema()

    return (
        <div className="container">
            <div className='logo' style={{ backgroundColor: colorFundo }}>
                <img className='imageLogo' src="/img/IMGLogo.png" alt="Logo" />
            </div>
            <div className="top-bar" style={{ backgroundColor: colorFundo  }}>
                <TopBar />
            </div>
            <div className="sidebar" style={{ backgroundColor: colorFundo }}>
                <SideBar />
            </div>
            <div className="content" style={{ backgroundColor: colorFundoBox }}>{children}</div>
        </div>
    )
}

export default MainBase