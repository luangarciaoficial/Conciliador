import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTema } from "../../../Tema/index.tsx";
import { MdOutlineLocalHospital, MdOutlineDeleteForever } from "react-icons/md";
import "../../camposTextos.css";
import formatarCampoCnpj from "../../../utils/FormatarCnpj/index.ts";
import useCriarUsuario from "./useCriarUsuario.ts";

const CriarUsuarios = () => {
    const { redIcons, colorTextoBox, colorBorda, colorLinhasTabela, colorBotoes, colorTextBotoes, colorFundoBox, colorTabela } = useTema();
    const location = useLocation();
    const { formatarCNPJ } = formatarCampoCnpj();

    const { dropdownRef, empresas, empresaUsuarioSeleconada, isOpen, filtro, inputDoSelecionarEmpresa, selecioneiEmpresa, handleInputChange, empresasFiltradas } = useCriarUsuario();

    return (
        <div className="boxPagina" style={{backgroundColor: colorFundoBox}}>
            <div className="divTitlePagina" style={{ borderColor: colorBorda }}>
                <h1 style={{color: colorTextoBox}}>Usuários</h1>
            </div>
            <div className="navigatePages">
                <Link
                    to={"/Usuarios/criarusuario"}
                    className={`itemNavigatePages ${location.pathname === "/Usuarios/criarusuario" ? "active" : ""
                        }`}
                    style={{ color: colorTextoBox, borderColor: colorBorda }}
                >
                    Adicionar Usuário
                </Link>
                <Link
                    to={"/Usuarios/listarusuario"}
                    className={`itemNavigatePages itemNavigatePadding ${location.pathname === "/Usuarios/listarusuario" ? "active" : ""
                        }`}
                    style={{ color: colorTextoBox, borderColor: colorBorda }}
                >
                    Listar Usuários
                </Link>
            </div>
            <div className="boxCadastro" style={{ backgroundColor: colorFundoBox }}>
                <div className="divTexto">
                    <div className="CampoTexto">
                        <label style={{color: colorTextoBox}}>Nome</label>
                        <input style={{ color: colorTextoBox, borderColor: colorBorda }} type="text" />
                    </div>
                    <div className="CampoTexto CampoTextoMargin">
                        <label style={{color: colorTextoBox}}>Usuario</label>
                        <input style={{ color: colorTextoBox, borderColor: colorBorda }} type="text" />
                    </div>
                    <div className="CampoTexto CampoTextoMargin">
                        <label style={{color: colorTextoBox}}>E-mail</label>
                        <input style={{ color: colorTextoBox, borderColor: colorBorda }} type="email" />
                    </div>
                    <div className="CampoTextoDireita">
                        <label style={{color: colorTextoBox}}>Senha</label>
                        <input style={{ color: colorTextoBox, borderColor: colorBorda }} type="password" />
                    </div>
                </div>

                <div className="divTexto divSelectEmpUser">
                    <div>
                        <label style={{color: colorTextoBox}}>Empresa a ser Vinculada</label>
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
                                            style={{color: colorTextoBox}}
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

                <div className="divTexto">
                    <table className="BoxTabela">
                        <thead className="topTabela">
                            <tr>
                            <th style={{ color: colorTextoBox, backgroundColor: colorTabela, width: '160px' }}>CNPJ</th>
                                    <th style={{ color: colorTextoBox, backgroundColor: colorTabela }}>Empresa</th>
                                    <th style={{ color: colorTextoBox, backgroundColor: colorTabela, width: '25px' }}> </th>
                            </tr>
                        </thead>
                        <tbody className="mainTabela">
                            {empresas.map((empresa, index) => (
                                <tr key={index}>
                                    <td style={{color: colorTextoBox, backgroundColor: colorLinhasTabela}}>{formatarCNPJ(empresa.cnpj)}</td>
                                    <td style={{color: colorTextoBox, backgroundColor: colorLinhasTabela}}>{empresa.nome}</td>
                                    <td style={{color: colorTextoBox, backgroundColor: colorLinhasTabela}}>
                                        <MdOutlineDeleteForever style={{color: redIcons}} className="IconRemoverDaLista" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="divTexto">
                    <div className="botaoCadastrar">
                        <button style={{ backgroundColor: colorBotoes, color: colorTextBotoes }}>
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriarUsuarios;