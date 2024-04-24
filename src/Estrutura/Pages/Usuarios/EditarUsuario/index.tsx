import React from 'react';
import '../../modal.css';
import { useTema } from '../../../Tema/index.tsx';
import { MdOutlineClose } from "react-icons/md";
import useCriarUsuario from '../CriarUsuario/useCriarUsuario.ts';
import { MdOutlineLocalHospital ,MdOutlineDeleteForever } from "react-icons/md";
import formatarCampoCnpj from '../../../utils/FormatarCnpj/index.ts';

interface Props {
    closeModal: () => void;
}

const EditarUsuario: React.FC<Props> = ({ closeModal }) => {

    const { colorBorda ,colorTextoBox, colorFundoBox, colorBotoes, colorTextBotoes, colorLinhasTabela, colorTabela, redIcons } = useTema()
    const { formatarCNPJ } = formatarCampoCnpj();
    //tirar isso depois
    const { dropdownRef, empresas, empresaUsuarioSeleconada, isOpen, filtro, inputDoSelecionarEmpresa, selecioneiEmpresa, handleInputChange, empresasFiltradas } = useCriarUsuario();

    return (
        <div className="containerModal">
            <div className="modal">
                <div className="modal-content">

                    <div className='tituloModal'>
                        <span>Editar Usuario</span>
                        <MdOutlineClose className="close" onClick={closeModal} />
                    </div>

                    <div className="camposInputModal">
                        <div className="CampoTexto">
                            <label style={{ color: colorTextoBox }}>Nome</label>
                            <input style={{ color: colorTextoBox, backgroundColor: colorFundoBox }} type="text" />
                        </div>
                        <div className="CampoTexto CampoTextoMargin">
                            <label style={{ color: colorTextoBox }}>Usuario</label>
                            <input style={{ color: colorTextoBox, backgroundColor: colorFundoBox }} type="text" />
                        </div>
                        <div className="CampoTexto">
                            <label style={{ color: colorTextoBox }}>E-mail</label>
                            <input style={{ color: colorTextoBox, backgroundColor: colorFundoBox }} type="text" />
                        </div>
                        <div className="CampoTexto CampoTextoMargin">
                            <label style={{ color: colorTextoBox }}>Senha</label>
                            <input style={{ color: colorTextoBox, backgroundColor: colorFundoBox }} type="text" />
                        </div>
                    </div>

                    <div className="modalSelecionar divSelectEmpUser">
                        <div>
                            <label style={{ color: colorTextoBox }}>Empresa a ser Vinculada</label>
                        </div>
                        <div className="separacaoDivEmpresaUser">
                            <div className="selecionarEmpresaUsuario">
                                <input
                                    type="text"
                                    onClick={inputDoSelecionarEmpresa}
                                    onChange={handleInputChange}
                                    value={empresaUsuarioSeleconada || filtro}
                                    style={{ color: colorTextoBox, borderColor: colorBorda }}
                                />
                                {isOpen && (
                                    <div className="dropdown" ref={dropdownRef}>
                                        {empresasFiltradas.map((empresa) => (
                                            <div
                                                key={empresa.cnpj}
                                                className="dropdownItem"
                                                onClick={() => selecioneiEmpresa(empresa.nome)}
                                                style={{ color: colorTextoBox }}
                                            >
                                                {formatarCNPJ(empresa.cnpj)} - {empresa.nome}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <MdOutlineLocalHospital className="iconAddEmpresaUser" />
                        </div>
                    </div>

                    <div className='tabelaModal'>
                        <table className="TabelaDoModal">
                            <thead className="">
                                <tr>
                                    <th style={{ color: colorTextoBox, backgroundColor: colorTabela, width: '160px' }}>CNPJ</th>
                                    <th style={{ color: colorTextoBox, backgroundColor: colorTabela }}>Empresa</th>
                                    <th style={{ color: colorTextoBox, backgroundColor: colorTabela, width: '25px' }}> </th>
                                </tr>
                            </thead>
                            <tbody className="mainTabela">
                                {empresas.map((empresa, index) => (
                                    <tr key={index}>
                                        <td style={{ color: colorTextoBox, backgroundColor: colorLinhasTabela }}>{formatarCNPJ(empresa.cnpj)}</td>
                                        <td style={{ color: colorTextoBox, backgroundColor: colorLinhasTabela }}>{empresa.nome}</td>
                                        <td style={{ color: colorTextoBox, backgroundColor: colorLinhasTabela }}>
                                            <MdOutlineDeleteForever style={{ color: redIcons }} className="IconRemoverDaLista" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='botaoModal'>
                        <button style={{ backgroundColor: colorBotoes, color: colorTextBotoes }} onClick={closeModal}>Salvar</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EditarUsuario;