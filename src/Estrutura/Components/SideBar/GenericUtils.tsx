import { BsHouse } from "react-icons/bs";
import { TbFileImport } from "react-icons/tb";

const MenuItems = {
    
    Items: [
        {
            key: "DashBoard",
            title: "DashBoard",
            path: "/",
            protect: true,
            icon: <BsHouse />,
            active: window.location.pathname === "/" // Verifica se está na página atual
        },
        {
            key: "Importação",
            title: "Importação",
            path: "/importacao",
            protect: true,
            icon: <TbFileImport />,
            active: window.location.pathname === "/importacao" // Verifica se está na página atual
        },
    ]
}

export default MenuItems;