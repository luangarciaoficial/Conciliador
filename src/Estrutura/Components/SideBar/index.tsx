import React from "react";
import { useTema } from "../../Tema/index.tsx";
import './sideBar.css';

import MenuItems from "./GenericUtils.tsx"

const SideBar = () => {
    const { colorTextosTransparentes ,colorIconsTransparente ,colorTextos, colorIcons } = useTema();

    return (
        <div className="menu">
            <ul className="menuSelect">
                {MenuItems.Items.map((menuItem) => (
                    <li className="SelectedMenu" key={menuItem.key}>
                        <p style={{ color: colorIconsTransparente }}>{menuItem.icon}</p>
                        <p style={{ color: colorTextosTransparentes }}>{menuItem.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;