import React from "react";
import { Animacao } from "./loading";

export const Loading = () =>{
    return(
        <Animacao>
            <div>
                <div className="image">
                    <img src="/favicon.ico"/>
                </div>
                <div id="pontos">
                    <label>Carregando</label>
                    <div className="ponto1"/>
                    <div className="ponto2"/>
                    <div className="ponto3"/>
                </div>
            </div>
        </Animacao>
    )
}