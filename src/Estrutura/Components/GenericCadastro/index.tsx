import React, { useState } from "react";
import "./GenericCadastro.css";
import { useTema } from "../../Tema/index.tsx";
import InputMask from "react-input-mask";

interface Campo {
  label: string;
  tipo: "text" | "select"; // Tipo de campo pode ser 'text' ou 'select'
  opcoes?: string[]; // Opções para o campo select
  mask?: string;
}

const GenericCadastro: React.FC<{ campos: Campo[] }> = ({ campos }) => {
  const { colorBotoes, colorTextBotoes, colorBorda, colorTextosTransparentes } = useTema();
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <>
      <div className="boxComponenteCadastro">
        {campos.map((campo, index) => (
          <div className="divcampos" key={index}>
            <label className={inputValues[campo.label] ? "activeLabel" : ""}>{campo.label}</label>
            {campo.tipo === "select" ? (
              <select name={campo.label} onChange={handleInputChange}>
                {campo.opcoes?.map((opcao, index) => (
                  <option key={index} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </select>
            ) : (
              campo.mask ? (
                <InputMask
                mask={campo.mask}
                type="text"
                name={campo.label}
                value={inputValues[campo.label] || ""}
                onChange={handleInputChange}
                className="inputMask"
                />
              ) : (
                <input
                  type={campo.tipo}
                  name={campo.label}
                  value={inputValues[campo.label] || ""}
                  onChange={handleInputChange}
                />
              )
            )}
          </div>
        ))}
      </div>
      <div className="divDoBotaoCadastrarEmpresa">
        <button className="botaoCadastrarEmpresa" style={{ backgroundColor: colorBotoes, color: colorTextBotoes }}>
          Cadastrar
        </button>
      </div>
    </>
  );
};

export default GenericCadastro;
