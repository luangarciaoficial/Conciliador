// TemaContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

interface TemaType {
    selecionarTema: boolean;
    toggleTema: () => void;
    colorFundo: string;
    colorFundoBox: string;
    colorFundoOptions: string;
    colorTextos: string;
    redTexto: string;
    colorTextosTransparentes: string;
    colorIcons: string;
    redIcons: string;
    colorIconsTransparente: string;
    colorBotoes: string;
    colorBorda: string;
    colorItemsMenu: string;
    colorActiveMenu: string;
    colorHover: string;
    colorActiveText: string;
    colorActiveBorder: string;
    colorTextBotoes: string
}

const TemaContext = createContext<TemaType | undefined>(undefined);

export const useTema = (): TemaType => {
    const context = useContext(TemaContext);
    if (!context) {
        throw new Error("useTema deve ser usado dentro de um TemaProvider");
    }
    return context;
};

export const TemaProvider: React.FC = ({ children }) => {
    const [selecionarTema, setSelecionarTema] = useState<boolean>(true);
    const [colorFundo, setColorFundo] = useState('white');
    const [colorFundoBox, setColorFundoBox] = useState('#f7f7f7f6');
    const [colorFundoOptions, setColorFundoOption] = useState('white')
    const [colorTextos, setColorTextos] = useState('black');
    const [redTexto, setRedTexto] = useState('#bb2528');
    const [colorTextosTransparentes, setColorTextosTransparentes] = useState('rgba(0, 0, 0, 0.5)');
    const [colorIcons, setColorIcons] = useState('black');
    const [redIcons, setRedIcons] = useState('#bb2528');
    const [colorIconsTransparente, setColorIconsTransparente] = useState('rgba(0, 0, 0, 0.5)');
    const [colorBorda, setColorBorda] = useState('rgba(0, 0, 0, 0.3)');
    const [colorBotoes, setColorBotoes] = useState('#250e62');
    const [colorTextBotoes ,setColorTextBotoes] = useState('white')
    const [colorItemsMenu, setColorItemsMenu] = useState('white')
    const [colorActiveMenu, setColorActiveMenu] = useState('#e8ffff')
    const [colorHover, setColorHover] = useState("#c9e7ff")
    const [colorActiveText, setColorActiveText] = useState('#e8ffff')
    const [colorActiveBorder, setColorActiveBorder] = useState('#e8ffff')

    const toggleTema = () => {
        setSelecionarTema(!selecionarTema);
    };

    const temaState: TemaType = {
        selecionarTema,
        toggleTema,
        colorFundo,
        colorFundoBox,
        colorFundoOptions,
        colorTextos,
        redTexto,
        colorTextosTransparentes,
        colorIcons,
        redIcons,
        colorIconsTransparente,
        colorBotoes,
        colorBorda,
        colorActiveMenu,
        colorItemsMenu,
        colorHover,
        colorActiveText,
        colorActiveBorder,
        colorTextBotoes
    };

    useEffect(() => {
        if (selecionarTema) {
            light();
        } else {
            dark();
        }
    }, [selecionarTema]);

    const light = () => {
        setColorFundo('white')
        setColorFundoBox('#f7f7f7f6')
        setColorFundoOption('white')
        setColorTextos('black')
        setRedTexto('#bb2528')
        setColorTextosTransparentes('rgba(0, 0, 0, 0.5)')
        setColorIcons('black')
        setRedIcons('#bb2528')
        setColorIconsTransparente('rgba(0, 0, 0, 0.5)')
        setColorBorda('rgba(0, 0, 0, 0.3)')
        setColorBotoes('#250e62')
        setColorTextBotoes('white')
        setColorItemsMenu('white')
        setColorActiveMenu('#e8ffff')
        setColorHover('#c9e7ff')
        setColorActiveText('black')
        setColorActiveBorder('aqua')
    };

    const dark = () => {
        setColorFundo('black')
        setColorFundoBox('#c4c4c4')
        setColorTextos('white')
        setRedTexto('#bb2528')
        setColorTextosTransparentes('white')
        setColorIcons('white')
        setRedIcons('#bb2528')
        setColorIconsTransparente('white')
        setColorBorda('white')
        setColorBotoes('black')
        setColorItemsMenu('black')
        setColorActiveMenu('#c4c4c4')
        setColorHover('#c9e7ff')
    };

    return (
        <TemaContext.Provider value={temaState}>
            {children}
        </TemaContext.Provider>
    );
};