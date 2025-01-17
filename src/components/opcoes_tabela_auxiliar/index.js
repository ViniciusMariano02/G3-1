import React from "react";
import { useNavigate } from "react-router";
import * as C from "../cadastro/cadastro";
import * as M from "../modais/modal/modal";
import * as CO from "../opcoes_funcionario/opcoes";

export const OpAuxiliar = ({close, setOpAuxiliar, modal, setModal, cadastro, setCadastro}) => {
    const navigate = useNavigate();

    return(
        <M.Modal>
            <C.Container style={{width: window.innerWidth < 700 ? '90%' : '40%', height: window.innerWidth < 700 ? '80%' : '', position: "fixed", top: window.innerWidth < 700 ? 'auto' : ''}}>
                <C.Header>
                    <h3>Tabelas Auxiliares</h3>
                </C.Header>
                <CO.Opcoes>
                    <div onClick={()=> {setModal({...modal, top: true}); setCadastro({...setCadastro, top: true}); setOpAuxiliar(false)}}>T.O.P</div>
                    <div onClick={()=> {setModal({...modal, perfilMov: true}); setCadastro({...cadastro, perfilMov: true})}}>Perfil de Movimentação</div>
                    <div onClick={()=> {setModal({...modal, perfil: true}); setCadastro({...cadastro, perfil: true})}}>Perfil de Regra</div>
                    <div onClick={()=> {setModal({...modal, ramo: true}); setCadastro({...cadastro, ramo: true})}}>Ramo de Atividade</div>
                    <div onClick={()=> {setModal({...modal, pgto: true}); setCadastro({...cadastro, pgto: true})}}>Tipo de Pagamento</div>
                </CO.Opcoes>
                <C.Footer>
                    <div className="buttons">
                        <button onClick={close}><img src="/images/voltar.png"/>Fechar</button>
                    </div>
                </C.Footer>
            </C.Container>
        </M.Modal>
    )
}