import React, { useEffect, useState } from "react";
import * as M from "../../modal/modal";
import * as CPC from "./cadastroPisCofins";
import * as C from "../../../cadastro/cadastro";

export const Excecao = ({close, minimizado, setMinimizado, minimizar, setMinimizar}) => {
    const [filiais, setFiliais] = useState([]);
    const [estados, setEstados] = useState([]);
    const [perfis, setPerfis] = useState([]);
    const [tops, setTops] = useState([]);

    const dadosEntrada=[
        {
            id: 50,
            descricao: "Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno"
        },
        {
            id: 51,
            descricao: "Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno"
        },
        {
            id: 52,
            descricao: "Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação"
        },
        {
            id: 53,
            descricao: "Operação com Direito a Crédito - Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno"
        },
        {
            id: 54,
            descricao: "Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação"
        },
        {
            id: 55,
            descricao: "Operação com Direito a Crédito - Vinculada a Receitas Não Tributadas no Mercado Interno e de Exportação"
        },
        {
            id: 56,
            descricao: "Operação com Direito a Crédito - Vinculada a receitas Tributadas e Não-Tributadas no Mercado Interno e de Exportação"
        },
        {
            id: 60,
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno"
        },
        {
            id: 61,
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno"
        },
        {
            id: 62,
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação"
        },
        {
            id: 63,
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno"
        },
        {
            id: 64,
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada  a Receitas Tributadas no Mercado Interno e de Exportação"
        },
        {
            id: 65,
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação"
        },
        {
            id: 66,
            descricao: "Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno e de Exportação"
        },
        {
            id: 67,
            descricao: "Crédito Presumido - Outras Operações"
        },
        {
            id: 70,
            descricao: "Operação de Aquisição sem Direito a Crédito"
        },
        {
            id: 71,
            descricao: "Operação de Aquisição com Isenção"
        },
        {
            id: 72,
            descricao: "Operação de Aquisição com Suspensão"
        },
        {
            id: 73,
            descricao: "Operação de Aquisição a Alíquota Zero"
        },
        {
            id: 74,
            descricao: "Operação de Aquisição sem Incidência da Contribuição"
        },
        {
            id: 75,
            descricao: "Operação de Aquisição sem Direito a Crédito"
        },
        {
            id: 98,
            descricao: "Outras operações de Entrada"
        },
        {
            id: 99,
            descricao: "Outras Operações"
        }
    ]
    const dadosSaida=[
        {
            id: "01",
            descricao: "Operação Tributável com Alíquota Básica"
        },
        {
            id: "02",
            descricao: "Operação Tributável com Alíquota Diferenciada"
        },
        {
            id: "03",
            descricao: "Operação Tributável com Alíquota por Unidade de Medida de Produto"
        },
        {
            id: "04",
            descricao: "Operação Tributável Monofásica - Revenda a Alíquota Zero"
        },
        {
            id: "05",
            descricao: "Operação Tributável por Substituição Tributária"
        },
        {
            id: "06",
            descricao: "Operação Tributável a Alíquota Zero"
        },
        {
            id: "07",
            descricao: "Operação Isenta da Contribuição"
        },
        {
            id: "08",
            descricao: "Operação sem Incidência da Contribuição"
        },
        {
            id: "09",
            descricao: "Operação com Suspensão da Contribuição"
        },
        {
            id: 49,
            descricao: "Outras Operações de Saída"
        },
    ]

    useEffect(()=>{
        async function fetchDataFiliais (){
            const response = await fetch("http://8b38091fc43d.sn.mynetname.net:2005/emitente/all");
            const data = await response.json();
            setFiliais(data);
        }
        async function fetchDataEstados (){
            const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
            const data = await response.json();
            setEstados(data);
        }
        async function fetchDataPerfis (){
            const response = await fetch("http://8b38091fc43d.sn.mynetname.net:2003/perfilRegra/all");
            const data = await response.json();
            setPerfis(data);
        }
        async function fetchDataTops (){
            const response = await fetch("http://8b38091fc43d.sn.mynetname.net:2004/top/all");
            const data = await response.json();
            setTops(data);
        }
        fetchDataFiliais();
        fetchDataEstados();
        fetchDataPerfis();
        fetchDataTops();
    },[])

    return(
        <M.SubModal style={{zIndex: minimizado.pis ? minimizar : "1"}}>
        <M.Container>
            <M.Header>
                <h3>Exceção a Regra PIS/COFINS</h3>
                <div className="buttons">
                    <button className="minimizar" onClick={()=> {setMinimizar("-5"); setMinimizado({...minimizado, pis: true})}}><div className="linha"/></button>
                    <button className="close" onClick={close}>X</button>
                </div>
            </M.Header>
            <CPC.ExcecaoRegra>
                <fieldset>
                    <legend>Exceção de Regra</legend>
                    <div>
                        <label>Filial: </label>
                        <select className="select-excecao">
                            {filiais.map((filial)=>{
                                return <option value={filial.id}>{filial.id} - {filial.razao_social}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Origem da Operação: </label>
                        <select className="select-operacao">
                            {estados.map((estado)=>{
                                return <option value={estado.sigla}>{estado.sigla}</option>
                            })}
                        </select>
                        <label>Destino da Operação: </label>
                        <select className="select-operacao">
                            {estados.map((estado)=>{
                                return <option value={estado.sigla}>{estado.sigla}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Perfil dos Parceiros</label>
                        <select className="select-excecao">
                            {perfis.map((perfil)=> {
                                return <option value={perfil.id}>{perfil.id} - {perfil.descricao}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label>Finalidade das Operações: </label>
                        <select className="select-excecao">
                            {tops.map((top)=> {
                                return <option value={top.id}>{top.id} - {top.descricao}</option>
                            })}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Tributação da Exceção</legend>
                    <div>
                        <div>
                            <label className="entrada">Situação de PIS (E): </label>
                            <select>
                                {dadosEntrada.map((entrada)=>{
                                    return <option>{entrada.id} - {entrada.descricao}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <label className="entrada">Alíquota Entrada: </label>
                            <input placeholder="0,0000"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="saida">Situação de PIS (S): </label>
                            <select>
                                {dadosSaida.map((saida)=>{
                                    return <option value={saida.id}>{saida.id} - {saida.descricao}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <label className="saida">Alíquota Saída: </label>
                            <input placeholder="0,0000"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="entrada">Situação de COFINS (E): </label>
                            <select>
                                {dadosEntrada.map((entrada)=>{
                                    return <option value={entrada.id}>{entrada.id} - {entrada.descricao}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <label className="entrada">Alíquota Entrada: </label>
                            <input placeholder="0,0000"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className="saida">Situação de COFINS (S): </label>
                            <select>
                                {dadosSaida.map((saida)=>{
                                    return <option value={saida.id}>{saida.id} - {saida.descricao}</option>
                                })}
                            </select>
                        </div>
                        <div>
                            <label className="saida">Alíquota Saída: </label>
                            <input placeholder="0,0000"/>
                        </div>
                    </div>
                </fieldset>
            </CPC.ExcecaoRegra>
            <C.Footer>
                <div className="buttons">
                    <button><img src="/images/salvar.png"/>Salvar</button>
                    <button onClick={close}><img src="/images/voltar.png"/>Cancelar</button>
                </div>
            </C.Footer>
        </M.Container>
        </M.SubModal>
    )
}