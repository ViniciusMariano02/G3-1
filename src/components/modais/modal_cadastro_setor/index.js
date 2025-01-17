import React, { useState } from "react";
import * as M from "../modal/modal";
import * as CP from "../modal_cadastro_perfil/cadastroPerfil";

export const CadastroSetor = ({close, minimizado, setMinimizado, minimizar, setMinimizar}) => {
    const [novoSetor, setNovoSetor] = useState('');
    const [operador, setOperador] = useState(false)

    async function salvar (){
        try{
            const response = await fetch("http://8b38091fc43d.sn.mynetname.net:2003/setorFuncionario/save",{
                method: "POST",    
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    descricao: novoSetor,
                    operadorDeCaixa: operador
                })
            })
            if(response.status === 200){
                alert('Salvo com sucesso!');
                close();
            }  
        }catch(err){
            console.log(err);
        }
    }
    
    return(
        <M.Modal style={{zIndex: minimizado.setor === true ? minimizar : "0"}}>
            <M.Container>
                <M.Header>
                    <label>Cadastro de Setor de Funcionário</label>
                    <div className="buttons">
                        <button className="minimizar" onClick={()=> {setMinimizar("-5"); setMinimizado({...minimizado, setor: true})}}><div className="linha"/></button>
                        <button className="close" onClick={close}>X</button>
                    </div>
                </M.Header>
                <CP.Content>
                    <div>
                        <div className="codigo">
                            <label>Código: </label>
                        </div>
                        <div className="div-descri">
                            <label>Descrição: </label>
                            <input value={novoSetor} onChange={(e)=>setNovoSetor(e.target.value)}/>
                        </div>
                        <div style={{height: 'auto', display: 'flex', flexDirection: 'row' ,  justifyContent: "start", alignItems: 'center'}}>
                            <input type="checkbox" onChange={()=> setOperador(!operador)}/>
                            <label>Operador de Caixa</label>
                        </div>
                    </div>
                </CP.Content>
                <M.Footer>
                    <div className="buttons">
                        <button onClick={salvar}><img src="/images/salvar.png"/>Salvar</button>
                        <button onClick={close}><img src="/images/voltar.png"/>Cancelar</button>
                    </div>
                </M.Footer>
            </M.Container>
        </M.Modal>
    )
}