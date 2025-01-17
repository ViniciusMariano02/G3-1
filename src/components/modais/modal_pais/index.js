import React, { useEffect, useState } from "react";
import { Loading } from "../../loading";
import * as M from "../modal/modal";

export const ListaPais = ({close, setDadosPaises, setDadosFornecedor, dadosFornecedor}) => {
    const paises = [
            {codigo: "0132", nome: "AFEGANISTAO"},	
            {codigo: "7560", nome: "AFRICA DO SUL"},
            {codigo: "0175", nome: "ALBANIA"},
            {codigo: "0230", nome: "ALEMANHA"},
            {codigo: "0370", nome: "ANDORRA"},
            {codigo: "0400", nome: "ANGOLA"},
            {codigo: "0418", nome: "ANGUILLA"},
            {codigo: "0434", nome: "ANTIGUA E BARBUDA"},
            {codigo: "0531", nome: "ARABIA SAUDITA"},
            {codigo: "0590", nome: "ARGELIA"},
            {codigo: "0639", nome: "ARGENTINA"},
            {codigo: "0647", nome: "ARMENIA"},
            {codigo: "0655", nome: "ARUBA"},
            {codigo: "0698", nome: "AUSTRALIA"},
            {codigo: "0728", nome: "AUSTRIA"},
            {codigo: "0736", nome: "AZERBAIDJAO"},
            {codigo: "0779", nome: "BAHAMAS, ILHAS"},
            {codigo: "0817", nome: "BANGLADESH"},
            {codigo: "0833", nome: "BARBADOS"},
            {codigo: "0809", nome: "BAREIN"},
            {codigo: "0850", nome: "BELARUS"},
            {codigo: "0876", nome: "BELGICA"},
            {codigo: "0884", nome: "BELIZE"},
            {codigo: "2291", nome: "BENIN"},
            {codigo: "0906", nome: "BERMUDAS"},
            {codigo: "0973", nome: "BOLIVIA"},
            {codigo: "0990", nome: "BONAIRE, SAINT EUSTATIUS E SABA"},
            {codigo: "0981", nome: "BOSNIA-HERZEGOVINA"},
            {codigo: "1015", nome: "BOTSUANA"},
            {codigo: "1098", nome: "BOUVET, ILHA"},
            {codigo: "1058", nome: "BRASIL"},
            {codigo: "1082", nome: "BRUNEI"},
            {codigo: "1112", nome: "BULGARIA"},
            {codigo: "0310", nome: "BURKINA FASO"},
            {codigo: "1155", nome: "BURUNDI"},
            {codigo: "1198", nome: "BUTAO"},
            {codigo: "1279", nome: "CABO VERDE"},
            {codigo: "1457", nome: "CAMAROES"},
            {codigo: "1414", nome: "CAMBOJA"},
            {codigo: "1490", nome: "CANADA"},
            {codigo: "1546", nome: "CATAR"},
            {codigo: "1376", nome: "CAYMAN"},
            {codigo: "1538", nome: "CAZAQUISTAO"},
            {codigo: "7889", nome: "CHADE"},
            {codigo: "1589", nome: "CHILE"},
            {codigo: "1600", nome: "CHINA"},
            {codigo: "1635", nome: "CHIPRE"},
            {codigo: "5118", nome: "CHRISTMAS, ILHA (NAVIDAD)"},
            {codigo: "7412", nome: "CINGAPURA"},
            {codigo: "1651", nome: "COCOS (KEELINGS)"},
            {codigo: "1694", nome: "COLOMBIA"},
            {codigo: "1732", nome: "COMORES"},
            {codigo: "1775", nome: "CONGO"},
            {codigo: "1830", nome: "COOK"},
            {codigo: "1872", nome: "COREIA DO NORTE"},
            {codigo: "1902", nome: "COREIA DO SUL"},
            {codigo: "1937", nome: "COSTA DO MARFIM"},
            {codigo: "1961", nome: "COSTA RICA"},
            {codigo: "1953", nome: "CROACIA"},
            {codigo: "1996", nome: "CUBA"},
            {codigo: "2003", nome: "CURACAO"},
            {codigo: "2321", nome: "DINAMARCA"},
            {codigo: "7838", nome: "DJIBUTI"},
            {codigo: "2356", nome: "DOMINICA"},
            {codigo: "2402", nome: "EGITO"},
            {codigo: "6874", nome: "EL SALVADOR"},
            {codigo: "2445", nome: "EMIRADOS ARABES UNIDOS"},
            {codigo: "2399", nome: "EQUADOR"},
            {codigo: "2437", nome: "ERITREIA"},
            {codigo: "2470", nome: "ESLOVAQUIA"},
            {codigo: "2461", nome: "ESLOVENIA"},
            {codigo: "2453", nome: "ESPANHA"},
            {codigo: "2496", nome: "ESTADOS UNIDOS"},
            {codigo: "2518", nome: "ESTONIA"},
            {codigo: "7544", nome: "ESWATINI (ANTIGA SUAZILANDIA"},
            {codigo: "2534", nome: "ETIOPIA"},
            {codigo: "2550", nome: "FALKLAND (MALVINAS)"},
            {codigo: "2593", nome: "FAROE"},
            {codigo: "8702", nome: "FIJI"},
            {codigo: "2674", nome: "FILIPINAS"},
            {codigo: "2712", nome: "FINLANDIA"},
            {codigo: "2755", nome: "FRANCA"},
            {codigo: "2810", nome: "GABAO"},
            {codigo: "2852", nome: "GAMBIA"},
            {codigo: "2895", nome: "GANA"},
            {codigo: "2917", nome: "GEORGIA"},
            {codigo: "2933", nome: "GIBRALTAR"},
            {codigo: "2976", nome: "GRANADA"},
            {codigo: "3018", nome: "GRECIA"},
            {codigo: "3050", nome: "GROENLANDIA"},
            {codigo: "3093", nome: "GUADALUPE"},
            {codigo: "3131", nome: "GUAM"},
            {codigo: "3174", nome: "GUATEMALA"},
            {codigo: "1504", nome: "GUERNSEY, ILHA DO CANAL (INCLUI ALDERNEY E SARK)"},
            {codigo: "3379", nome: "GUIANA"},
            {codigo: "3255", nome: "GUIANA FRANCESA"},
            {codigo: "3298", nome: "GUINE"},
            {codigo: "3344", nome: "GUINE-BISSAU"},
            {codigo: "3310", nome: "GUINE-EQUATORIAL"},
            {codigo: "3417", nome: "HAITI"},
            {codigo: "5738", nome: "HOLANDA (PAISES BAIXOS)"},
            {codigo: "3450", nome: "HONDURAS"},
            {codigo: "3514", nome: "HONG KONG"},
            {codigo: "3557", nome: "HUNGRIA"},
            {codigo: "3573", nome: "IEMEN"},
            {codigo: "3611", nome: "INDIA"},
            {codigo: "3654", nome: "INDONESIA"},
            {codigo: "3727", nome: "IRA"},
            {codigo: "3697", nome: "IRAQUE"},
            {codigo: "3751", nome: "IRLANDA"},
            {codigo: "3794", nome: "ISLANDIA"},
            {codigo: "3832", nome: "ISRAEL"},
            {codigo: "3867", nome: "ITALIA"},
            {codigo: "3913", nome: "JAMAICA"},
            {codigo: "3999", nome: "JAPAO"},
            {codigo: "1508", nome: "JERSEY, ILHA DO CANAL"},
            {codigo: "3964", nome: "OHNSTON"},
            {codigo: "4030", nome: "JORDANIA"},
            {codigo: "4111", nome: "KIRIBATI"},
            {codigo: "1988", nome: "UWEIT (ou Coveite)"},
            {codigo: "4200", nome: "LAOS"},
            {codigo: "4260", nome: "ESOTO"},
            {codigo: "4278", nome: "LETONIA"},
            {codigo: "4316", nome: "LIBANO"},
            {codigo: "4340", nome: "LIBERIA"},
            {codigo: "4383", nome: "LIBIA"},
            {codigo: "4405", nome: "LIECHTENSTEIN"},
            {codigo: "421", nome: "LITUANIA"},
            {codigo: "4456", nome: "LUXEMBURGO"},
            {codigo: "4472", nome: "MACAU"},
            {codigo: "421", nome: "MACEDONIA"},
            {codigo: "4502", nome: "MADAGASCAR"},
            {codigo: "4553", nome: "MALASIA"},
            {codigo: "4588", nome: "MALAVI"},
            {codigo: "4618", nome: "MALDIVAS"},
            {codigo: "4642", nome: "MALI"},
            {codigo: "4677", nome: "MALTA"},
            {codigo: "3595", nome: "MAN, ILHA DE"},
            {codigo: "4723", nome: "MARIANAS DO NORTE"},
            {codigo: "4740", nome: "MARROCOS"},
            {codigo: "4766", nome: "MARSHALL, ILHAS"},
            {codigo: "4774", nome: "MARTINICA"},
            {codigo: "4855", nome: "MAURICIO"},
            {codigo: "4880", nome: "MAURITANIA"},
            {codigo: "4936", nome: "MEXICO"},
            {codigo: "0930", nome: "MIANMAR"},
            {codigo: "4995", nome: "MICRONESIA"},
            {codigo: "5053", nome: "MOCAMBIQUE"},
            {codigo: "4944", nome: "MOLDAVIA"},
            {codigo: "4952", nome: "ONACO"},
            {codigo: "4979", nome: "MONGOLIA"},
            {codigo: "4985", nome: "MONTENEGRO"},
            {codigo: "5010", nome: "MONTSERRAT"},
            {codigo: "5070", nome: "NAMIBIA"},
            {codigo: "5088", nome: "NAURU"},
            {codigo: "5177", nome: "NEPAL"},
            {codigo: "5215", nome: "NICARAGUA"},
            {codigo: "5258", nome: "NIGER"},
            {codigo: "5282", nome: "NIGERIA"},
            {codigo: "5312", nome: "NIUE"},
            {codigo: "5355", nome: "NORFOLK, ILHA"},
            {codigo: "5380", nome: "NORUEGA"},
            {codigo: "5428", nome: "NOVA CALEDONIA"},
            {codigo: "5487", nome: "NOVA ZELANDIA"},
            {codigo: "5568", nome: "OMA"},
            {codigo: "5665", nome: "PACIFICO, ILHAS DO (POSSESSAO DOS EUA)"},
            {codigo: "5754", nome: "PALAU"},
            {codigo: "5780", nome: "PALESTINA"},
            {codigo: "5800", nome: "PANAMA"},
            {codigo: "5452", nome: "PAPUA NOVA GUINE"},
            {codigo: "5762", nome: "PAQUISTAO"},
            {codigo: "5860", nome: "ARAGUAI"},
            {codigo: "5894", nome: "PERU"},
            {codigo: "5932", nome: "PITCAIRN"},
            {codigo: "5991", nome: "POLINESIA FRANCESA"},
            {codigo: "6033", nome: "OLONIA"},
            {codigo: "6114", nome: "PORTO RICO"},
            {codigo: "6076", nome: "PORTUGAL"},
            {codigo: "6238", nome: "QUENIA"},
            {codigo: "6254", nome: "QUIRGUISTAO"},
            {codigo: "6289", nome: "REINO UNIDO"},
            {codigo: "6408", nome: "REPUBLICA CENTRO-AFRICANA"},
            {codigo: "8885", nome: "REPUBLICA DEMOCRATICA DO CONGO"},
            {codigo: "6475", nome: "REPUBLICA DOMINICANA"},
            {codigo: "7919", nome: "REPUBLICA TCHECA"},
            {codigo: "6602", nome: "REUNIAO"},
            {codigo: "6700", nome: "ROMENIA"},
            {codigo: "6750", nome: "RUANDA"},
            {codigo: "6769", nome: "RUSSIA"},
            {codigo: "6858", nome: "SAARA OCIDENTAL"},
            {codigo: "6777", nome: "SALOMAO, ILHAS"},
            {codigo: "6904", nome: "SAMOA"},
            {codigo: "6912", nome: "SAMOA AMERICANA"},
            {codigo: "6971", nome: "SAN MARINO"},
            {codigo: "7102", nome: "SANTA HELENA"},
            {codigo: "7153", nome: "SANTA LUCIA"},
            {codigo: "6955", nome: "SAO CRISTOVAO E NEVES"},
            {codigo: "6980", nome: "SAO MARTINHO, ILHA DE (PARTE FRANCESA)"},
            {codigo: "6998", nome: "SAO MARTINHO, ILHA DE (PARTE HOLANDESA)"},
            {codigo: "7005", nome: "SAO PEDRO E MIQUELON"},
            {codigo: "7200", nome: "SAO TOME E PRINCIPE"},
            {codigo: "7056", nome: "SAO VICENTE E GRANADINAS"},
            {codigo: "7315", nome: "SEICHELES"},
            {codigo: "7285", nome: "SENEGAL"},
            {codigo: "7358", nome: "SERRA LEOA"},
            {codigo: "7370", nome: "SERVIA"},
            {codigo: "7447", nome: "SIRIA"},
            {codigo: "7480", nome: "SOMALIA"},
            {codigo: "7501", nome: "SRI LANKA"},
            {codigo: "7595", nome: "SUDAO"},
            {codigo: "7600", nome: "SUDÃO DO SUL"},
            {codigo: "7641", nome: "SUECIA"},
            {codigo: "7676", nome: "SUICA"},
            {codigo: "7706", nome: "SURINAME"},
            {codigo: "7552", nome: "SVALBARD E JAN MAYEN"},
            {codigo: "7722", nome: "TADJIQUISTAO"},
            {codigo: "7765", nome: "TAILANDIA"},
            {codigo: "1619", nome: "TAIWAN"},
            {codigo: "7803", nome: "TANZANIA"},
            {codigo: "7820", nome: "TERRITORIO BRITANICO OCEANO INDICO"},
            {codigo: "7951", nome: "TIMOR LESTE"},
            {codigo: "8001", nome: "TOGO"},
            {codigo: "8109", nome: "TONGA"},
            {codigo: "8052", nome: "OQUELAU"},
            {codigo: "8150", nome: "TRINIDAD E TOBAGO"},
            {codigo: "8206", nome: "TUNISIA"},
            {codigo: "8230", nome: "TURCAS E CAICOS"},
            {codigo: "8249", nome: "TURCOMENISTAO"},
            {codigo: "8273", nome: "TURQUIA"},
            {codigo: "8281", nome: "TUVALU"},
            {codigo: "8311", nome: "UCRANIA"},
            {codigo: "8338", nome: "UGANDA"},
            {codigo: "8451", nome: "URUGUAI"},
            {codigo: "8478", nome: "UZBEQUISTAO"},
            {codigo: "5517", nome: "VANUATU"},
            {codigo: "8486", nome: "VATICANO"},
            {codigo: "8508", nome: "VENEZUELA"},
            {codigo: "8583", nome: "VIETNA"},
            {codigo: "8630", nome: "VIRGENS, ILHAS (BRITANICAS)"},
            {codigo: "8664", nome: "VIRGENS, ILHAS (EUA)"},
            {codigo: "8753", nome: "WALLIS E FUTUNA, ILHAS"},
            {codigo: "8907", nome: "ZAMBIA"},
            {codigo: "6653", nome: "ZIMBABUE"},
    ]
    const [busca, setBusca] = useState([]);


    function selecionado (pais){
        setDadosPaises && setDadosPaises({
            codigo: pais.codigo,
            nome:  pais.nome
        });
        setDadosFornecedor && setDadosFornecedor({
            ...dadosFornecedor,
            codigo_pais: pais.codigo,
            pais: pais.nome,
        });
        close();
    }
    const resultado = Array.isArray(paises) && paises.filter((pais) => pais.nome.toLowerCase().includes(busca));

    return(
        <M.Modal>
            <M.Container>
                <M.Header>
                    <label>Lista de Países</label>
                    <button className="close" onClick={close}>X</button>
                </M.Header>
                <M.Filtro>
                    <div className="div-search">
                        <label>Buscar: </label>
                        <input className="search" id="search" placeholder="Buscar" value={busca} onChange={(e)=> setBusca(e.target.value)}/>
                    </div>
                </M.Filtro>
                {paises.length === 0 ? (
                    <Loading/>
                ) : (
                    <div className="table-responsive">
                        <table id="table">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                </tr>
                            </thead>
                            <tbody>
                                {resultado.map((pais) => {
                                    return(
                                        <tr key={pais.codigo} onDoubleClick={selecionado.bind(this, pais)}>
                                            <td>{pais.codigo}</td>
                                            <td>{pais.nome}</td>
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