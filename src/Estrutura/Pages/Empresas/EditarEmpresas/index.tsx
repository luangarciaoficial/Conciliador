import React from 'react';
import '../../modal.css';
import { useTema } from '../../../Tema/index.tsx';
import { MdOutlineClose } from "react-icons/md";

interface Props {
    closeModal: () => void;
}

const EditarEmpresas: React.FC<Props> = ({ closeModal }) => {

    const { colorTextoBox, colorFundoBox, colorBotoes, colorTextBotoes } = useTema()

    return (
        <div className="containerModal">
            <div className="modal">
                <div className="modal-content">

                    <div className='tituloModal'>
                        <span>Editar Empresa</span>
                        <MdOutlineClose className="close" onClick={closeModal}/>
                    </div>

                    <div className="camposInputModal">
                        <div className="CampoTexto">
                            <label style={{ color: colorTextoBox }}>CNPJ</label>
                            <input style={{ color: colorTextoBox, backgroundColor: colorFundoBox }} type="text" />
                        </div>
                        <div className="CampoTexto CampoTextoMargin">
                            <label style={{ color: colorTextoBox }}>Nome Fantasia</label>
                            <input style={{ color: colorTextoBox, backgroundColor: colorFundoBox }} type="text" />
                        </div>
                    </div>

                    <div className='botaoModal'>
                        <button style={{backgroundColor: colorBotoes, color: colorTextBotoes}} onClick={closeModal}>Salvar</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EditarEmpresas;