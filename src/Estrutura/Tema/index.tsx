// TemaContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

interface TemaType {
    selecionarTema: boolean;
    toggleTema: () => void;
    colorFundo: string;
    colorFundoBox: string;
    colorTextos: string;
    colorTextoBox: string
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
    colorTabela: string
    colorLinhasTabela: string
    colorTextoTabela: string
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

    const [colorFundo, setColorFundo] = useState('');
    const [colorFundoBox, setColorFundoBox] = useState('');
    const [colorTextos, setColorTextos] = useState('');
    const [colorTextoBox, setColorTextoBox] = useState('')
    const [redTexto, setRedTexto] = useState('');
    const [colorTextosTransparentes, setColorTextosTransparentes] = useState('');
    const [colorIcons, setColorIcons] = useState('');
    const [redIcons, setRedIcons] = useState('');
    const [colorIconsTransparente, setColorIconsTransparente] = useState('');
    const [colorBorda, setColorBorda] = useState('');
    const [colorBotoes, setColorBotoes] = useState('');
    const [colorTextBotoes, setColorTextBotoes] = useState('')
    const [colorItemsMenu, setColorItemsMenu] = useState('')
    const [colorActiveMenu, setColorActiveMenu] = useState('')
    const [colorHover, setColorHover] = useState('')
    const [colorActiveText, setColorActiveText] = useState('')
    const [colorActiveBorder, setColorActiveBorder] = useState('')
    const [colorTabela, setColorTabela] = useState('')
    const [colorLinhasTabela, setColorLinhasTabela] = useState('')
    const [colorTextoTabela, setColorTextoTabela] = useState('')

    const toggleTema = () => {
        setSelecionarTema(!selecionarTema);
    };

    const temaState: TemaType = {
        selecionarTema,
        toggleTema,
        colorFundo,
        colorFundoBox,
        colorTextos,
        redTexto,
        colorTextoBox,
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
        colorTextBotoes,
        colorTabela,
        colorLinhasTabela,
        colorTextoTabela
    };

    useEffect(() => {
        if (selecionarTema) {
            light();
        } else {
            dark();
        }
    }, [selecionarTema]);

    const light = () => {
        setColorFundo('#f7f7f7f6')
        setColorFundoBox('white')
        setColorTextos('black')
        setColorTextoBox('black')
        setRedTexto('#bb2528')
        setColorTextosTransparentes('black')
        setColorIcons('black')
        setRedIcons('#bb2528')
        setColorIconsTransparente('black')
        setColorBorda('black')
        setColorBotoes('#250e62')
        setColorTextBotoes('white')
        setColorItemsMenu('white')
        setColorActiveMenu('#e8ffff')
        setColorHover('#c9e7ff')
        setColorActiveText('black')
        setColorActiveBorder('aqua')
        setColorTabela('#c4c4c4')
        setColorLinhasTabela('#f7f7f7f6')
        setColorTextoTabela('black')
    };

    const dark = () => {
        setColorFundo('black')
        setColorFundoBox('black')
        setColorTextos('white')
        setColorTextoBox('white')
        setRedTexto('red')
        setColorTextosTransparentes('white')
        setColorIcons('white')
        setRedIcons('red')
        setColorIconsTransparente('white')
        setColorBorda('white')
        setColorBotoes('white')
        setColorTextBotoes('black')
        setColorItemsMenu('white')
        setColorActiveMenu('#e8ffff')
        setColorHover('#c9e7ff')
        setColorActiveText('black')
        setColorActiveBorder('aqua')
        setColorTabela('white')
        setColorLinhasTabela('white')
        setColorTextoTabela('black')
    };

    return (
        <TemaContext.Provider value={temaState}>
            {children}
        </TemaContext.Provider>
    );
};