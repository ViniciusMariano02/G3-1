import styled from 'styled-components'; 


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 90vh;
    width: 60vw;
    border: 1px solid black;
    border-radius: 12px;
`;

export const Header = styled.div`
    border: 1.5px;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 24px;
    width: 100%;
    background-color: #f0f0f0;
    button{
        margin: 0 5px;
        position: relative;
    }
`;

export const Filtro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .div-checkbox{
        display: flex;
        flex-wrap: wrap;
    }
    .line{
        border-right: 1px solid #000;
        margin: 5px
    }
`;

export const Rotinas = styled.div`
    margin: 5px 0;
    background-color: #f0f0f0;
    display: flex;
    align-items: start;
    justify-content: center;
    border: 1px solid black;
    height: 60%;
    width: 100%;
    overflow-x: auto;
    #table{
        border-collapse: collapse;
        width: 100%;
        border: 1px solid grey;
        th{    
            font-size: 15px;
            font-weight: bold;
            color: #373435;    
            background-color: #ffffff;
            border: 1px solid grey;
        }
        td{
            border: 1px solid grey;
        }
        #table tr td{
            cursor: pointer;
        }
        #table tr:hover td{
            background-color: #87CEFA;
        }
        .ativo{
            background-color: blue;
            color: white;
        }
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    .yellow{
        height: 20px;
        width: 20px;
        background-color: yellow;
        border: 1px solid grey;
    }
    .white{
        height: 20px;
        width: 20px;
        background-color: white;
        border: 1px solid grey;
    }

    .green{
        height: 20px;
        width: 20px;
        background-color: #66CDAA;
        border: 1px solid grey;
    }

    .blue{
        height: 20px;
        width: 20px;
        background-color: blue;
        border: 1px solid grey;
    }
    .indice{
        display: block;
    }
    div{
        display: flex;
        margin: 0 5px;
    }
    button{
        width: 117px;
        height: 33px;
        display: flex;
        justify-content: center;
        align-items: center;
        button:hover{
            
        }
    }
`;