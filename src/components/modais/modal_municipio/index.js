import React, { useEffect, useState } from "react";
import * as M from "../modal/modal";
import { Loading } from "../../loading/index";

export const ListaMunicipio = ({close, setDadosCliente, dadosCliente, setDadosFuncionario, dadosFuncionario, setDadosFornecedor, dadosFornecedor}) => {
    const [municipios, setMunicipios] = useState([]);
    const [busca, setBusca] = useState([]);

    // Estado para verificar se obteve 200 da api caso não, mostre a mensagem de sem dados
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        async function fetchData (){
            const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/municipios");
            const data = await response.json();
            setMunicipios(data);
            if( response.status === 200){
                setCarregado(true);
            }
        }
            fetchData();
    }, []);

    function selecionado (municipio){
        setDadosCliente && setDadosCliente({
            ...dadosCliente,
            cod_municipio: municipio.id,
            municipio: municipio.nome
        })
        setDadosFuncionario && setDadosFuncionario({
            ...dadosFuncionario,
            codigo_municipio: municipio.id,
            municipio: municipio.nome,
            uf: municipio.microrregiao.mesorregiao.UF.sigla
        });
        setDadosFornecedor && setDadosFornecedor({
            ...dadosFornecedor,
            codigo_municipio: municipio.id,
            municipio: municipio.nome,
        })
        close();
    }
    const resultado = Array.isArray(municipios) && municipios.filter((municipio) => municipio.nome.toLowerCase().includes(busca));

    return(
        <M.Modal>
            <M.Container>
                <M.Header>
                    <label>Lista de Municípios</label>
                    <button className="close" onClick={close}>X</button>
                </M.Header>
                <M.Filtro>
                    <div className="div-search">
                        <label>Buscar: </label>
                        <input className="search" id="search" placeholder="Buscar" value={busca} onChange={(e)=> setBusca(e.target.value)}/>
                    </div>
                </M.Filtro>
                {municipios.length === 0 && carregado === false? (
                    <Loading/>
                ) : municipios.length === 0 && carregado ? (
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>UF</th>
                                </tr>
                            </thead>
                        </table>
                        <div style={{height: "90%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "red", fontWeight: "bold"}}>
                            Não Existem dados a serem exibidos!
                        </div>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table id="table">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>UF</th>
                                </tr>
                            </thead>
                            <tbody>
                                {resultado.map((municipio) => {
                                    return(
                                        <tr key={municipio.id} onDoubleClick={selecionado.bind(this, municipio)}>
                                            <td>{municipio.id}</td>
                                            <td>{municipio.nome}</td>
                                            <td>{municipio.microrregiao.mesorregiao.UF.sigla}</td>
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                )}
            </M.Container>
        </M.Modal>
    )
}