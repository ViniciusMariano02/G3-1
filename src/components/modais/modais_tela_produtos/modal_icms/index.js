import React, { useEffect, useState } from "react";
import { Loading } from "../../../loading";
import * as M from "../../modal/modal";
import {Lista} from "./grupo";
//import grupos from "../../../../grupos/grupos.json";

export const Grupo = ({close, minimizado, setMinimizado, setGrupo}) => {
    const [filho, setFilho] = useState(
        {
        ID: "",
        DESCRICAO: "",
        EXCLUIDO: "",
        ID_PAI: "",
        NOME_PAI: "",
        DATA_EDICAO: "",
        DATA_EXCLUSAO: "",
        DATA_INSERCAO: "",
        ID_USUARIO_INSERCAO: "",
        ID_USUARIO_EDICAO: "",
        ID_USUARIO_EXCLUSAO: "",
        CODIGO: ""
    }
    );
    /*const pai = grupos.filter((grupo) => grupo.DESCRICAO === grupo.NOME_PAI);*/
    const [pai, setPai] = useState([]);

    // Estado para verificar se obteve 200 da api caso não, mostre a mensagem de sem dados
    const [carregado, setCarregado] = useState(false);

    useEffect(()=> {
        async function fetchData (){
            const response = await fetch('http://10.0.1.10:8092/grupo/all');
            const data = await response.json();
            setPai(data);
            if( response.status === 200){
                setCarregado(true);
            }
        }
        fetchData();
        document.getElementById("search").focus();
    },[])

    function abrirFilho (grupo){
        const filho = pai.filter((g)=> {
            if(g.id_pai === 0 || g.id_pai === null){
                return null
            }else{
                return grupo.id === g.id_pai
            }
        })
        setFilho(filho);
    }

    function selecionado (grupo, filho){
        setGrupo({
            codigo: grupo ? grupo.codigo : filho ? filho.codigo : "",
            descricao: grupo ? grupo.descricao : filho ? filho.descricao : ""
        });
        close();
    }

    // Estado que indica quando minimizado para colocar atrás de tudo
    const [minimizar, setMinimizar] = useState("");

    return(
        <M.Modal  style={{zIndex: minimizado && minimizado.grupo ? minimizar : "1"}}>
            <M.Container>
                <M.Header>
                    <h3>Grupo / SubGrupo</h3>
                    <div className="buttons">
                        <button className="minimizar" onClick={()=> {setMinimizar("-5"); setMinimizado({...minimizado, grupo: true})}}><div className="linha"/></button>
                        <button className="close" onClick={close}>X</button>
                    </div>
                </M.Header>
                <M.Filtro>
                    <input type="radio"/>
                    <label>Ativos</label>
                    <input type="radio"/>
                    <label>Inativos</label>
                    <select>
                        <option>Código</option>
                        <option>Descrição</option>
                    </select>
                    <input className="search" id="search" placeholder="Buscar..."/>
                </M.Filtro>
                <Lista>
                    <div>
                        <img src="/images/pastaFechada.png"/>
                        <label>Grupos:</label>
                    </div>
                    {pai.length === 0 && carregado === false ? (
                        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <Loading/>
                        </div>
                    ) : pai.length === 0 && carregado ? (
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Data Venda</th>
                                        <th>Empresa</th>
                                        <th>Cliente</th>
                                        <th>Situação</th>
                                        <th>Valor</th>
                                        <th>TOP</th>
                                    </tr>
                                </thead>
                            </table>
                            <div style={{height: "90%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "red", fontWeight: "bold"}}>
                                Não Existem dados a serem exibidos!
                            </div>
                        </div>
                    ) : (
                        pai.map((grupo)=> {
                            return(
                                <>
                                    <div className="grupo" key={grupo.codigo} onClick={abrirFilho.bind(this, grupo)} onDoubleClick={selecionado.bind(this, grupo)}>
                                    <img src="/images/pastaFechada.png"/>{grupo.codigo} - {grupo.descricao}
                                    </div>
                                    {Array.isArray(filho) && filho.map((filho)=> {
                                        if(grupo.id === filho.id_pai){
                                            return <div className="filho" onDoubleClick={selecionado.bind(this, filho)}>{filho.codigo} - {filho.descricao}</div>
                                        }
                                    })}
                                </>
                                )
                        })
                    )}
                    
                </Lista>
            </M.Container>
        </M.Modal>
    )
}