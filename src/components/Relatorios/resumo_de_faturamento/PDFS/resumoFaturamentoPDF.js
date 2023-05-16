import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export function resumoFaturamentoVendedorPDF(valorFilial, valorIdTop, dataIni, dataFin, checkNFE, checkNFCE, dadosVendedor) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const nfe = () => {
        if (checkNFE === true) {
            return (
                "SIM"
            )
        } else if (checkNFE === false) {
            return (
                "NÃO"
            )
        }
    }

    const nfce = () => {
        if (checkNFCE === true) {
            return (
                "SIM"
            )

        } else if (checkNFCE === false) {
            return (
                "NÃO"
            )
        }
    }

    const Filial = () => {
        if(valorFilial.length === 0){
            return (
                "TODAS"
            )
        }else{
            return valorFilial
        }
    }

    const Top = () => {
        if(valorIdTop.length === 0){
            return (
                "TODAS"
            )
        }else{
            return valorIdTop
        }
    }

    const Quantidade = dadosVendedor.reduce((a, b) => a + b.qtdVendas, 0)
    const valNfe = dadosVendedor.reduce((a, b) => a + b.vlTotalNfe, 0)
    const valNfce = dadosVendedor.reduce((a, b) => a + b.vlTotalNfce, 0)
    const Venda = dadosVendedor.reduce((a, b) => a + b.vlVendaTotal, 0)
    const Cancelamento = dadosVendedor.reduce((a, b) => a + b.vlTotalCancelamento, 0)
    const Comissao = dadosVendedor.reduce((a, b) => a + b.vlTotalComissao, 0)
    const Custo = dadosVendedor.reduce((a, b) => a + b.vlCustoTotal, 0)
    const Lucro = dadosVendedor.reduce((a, b) => a + b.vlLucroLiquido, 0)
    const PerLucro = dadosVendedor.reduce((a, b) => a + b.plucroLiquido, 0)
    const Percentual = dadosVendedor.reduce((a, b) => a + b.percentual, 0) 

    const vendedor = dadosVendedor.map((data) => {
        return[
            {text: data.idFilial, fontSize: 8 },
            {text: data.idVendedor, fontSize: 8 },
            {text: data.vendedor, fontSize: 8 },
            {text: data.qtdVendas, fontSize: 8 },
            {text: data.vlTotalNfe.toFixed(2).replace('.', ','), fontSize: 8 },
            {text: data.vlTotalNfce.toFixed(2).replace('.', ','), fontSize: 8 },
            {text: data.vlVendaTotal.toFixed(2).replace('.', ','), fontSize: 8 },
            {text: data.vlTotalCancelamento.toFixed(2).replace('.', ','), fontSize: 8 },
            {text: data.vlTotalComissao.toFixed(2).replace('.', ','), fontSize: 8 },
            {text: data.vlCustoTotal.toFixed(2).replace('.', ','), fontSize: 8 },
            {text: data.vlLucroVenda.toFixed(2).replace('.', ','), fontSize: 8 },
            {text: data.vlLucroLiquido.toFixed(2).replace('.', ','), fontSize: 8 },
            {text: data.plucroLiquido.toFixed(2).replace('.', ','), fontSize: 8 },
            {text: data.percentual.toFixed(2).replace('.', ','), fontSize: 8 },
        ]
    } )

    const dataAtual = new Date().toLocaleString();

    const header = [
        {
            text: 'Resumo de Faturamento Por Vendedor',
            style: 'subheader',
            fontSize: 15,
            bold: true,
            alignment: 'left',
            margin: [0, 0, 0, 0],
        },
        {
            text: [dataAtual],
            alignment: 'right',
            fontSize: 9,
        }

    ];

    const content = [
        {
            table: {
                widths: ['*', 150],
                body: [
                    [
                        { text: 'Filial: ' + (Filial()), bold: true, fontSize: 8 },
                    ],
                    [
                        { text: 'T.OP: ' + (Top()), bold: true, fontSize: 8 },
                    ],
                    [
                        { text: 'Período: ' + (dataIni) + ' Á ' + (dataFin), bold: true, fontSize: 8 },
                    ],
                    [
                        { text: 'NF-e: ' + (nfe()), bold: true, fontSize: 8 },
                    ],
                    [
                        { text: 'NFC-e: ' + (nfce()), bold: true, fontSize: 8 },
                    ],
                    [
                        { text: '', fontSize: 8 },
                    ],

                ]
            },
            layout: 'headerLineOnly',
        },
        {   table: {
            headerRows: 1,
            widths: [30,40,125,45,45,45,45,45,45,45,45,45,45,45],
                body: [
                    [
                        {text: 'Id. Filial', fillColor: '#E0E7ED', fontSize: 7},
                        {text: 'Id. Vendedor',fillColor: '#E0E7ED', fontSize: 7 },
                        {text: 'Vendedor',fillColor: '#E0E7ED', fontSize: 7},
                        {text: 'Qtd. Vendas',fillColor: '#E0E7ED',  fontSize: 7},
                        {text: 'Vlr. Total NF-e',fillColor: '#E0E7ED',  fontSize: 7},
                        {text: 'Vlr. Total NFC-e',fillColor: '#E0E7ED', fontSize: 7},
                        {text: 'Vlr. Venda Total',fillColor: '#E0E7ED', fontSize: 7, headerRows: 1,},
                        {text: 'Vlr. Total Cancelamento',fillColor: '#E0E7ED', fontSize: 7, headerRows: 1,},
                        {text: 'Vlr. Total Comissão',fillColor: '#E0E7ED', fontSize: 7, headerRows: 1,},
                        {text: 'Vlr. Custo Total',fillColor: '#E0E7ED', fontSize: 7, headerRows: 1,},
                        {text: 'Vlr. Lucro Venda',fillColor: '#E0E7ED', fontSize: 7, headerRows: 1,},
                        {text: 'Vlr. Lucro Liquido',fillColor: '#E0E7ED', fontSize: 7, headerRows: 1,},
                        {text: 'Per. Lucro Líquido',fillColor: '#E0E7ED', fontSize: 7, headerRows: 1,},
                        {text: 'Percentual',fillColor: '#E0E7ED', fontSize: 7, headerRows: 1,},
                    ],
                    ...vendedor
                ],
            },

        },
        {
            table: {
                headerRows: 1,
                widths: ['*'],
                body: [
                    [
                        {text: 'Totais', alignment: 'center'}
                    ]
                ]
            },
            layout: 'headerLineOnly',
        },
        {
            table: {
                widths: ['*','*','*','*','*','*','*','*','*','*'],
                body: [
                    [
                        {text: 'Qtd.Vendas: ' + (Quantidade) , alignment: 'center', fontSize: 8, bold: true},
                        {text: 'NF-e: ' + (valNfe.toFixed(2).replace('.', ',')) , alignment: 'center', fontSize: 8, bold: true},
                        {text: 'NFC-e: ' + (valNfce.toFixed(2).replace('.', ',')) , alignment: 'center', fontSize: 8, bold: true},
                        {text: 'Venda: ' + (Venda.toFixed(2).replace('.', ',')) , alignment: 'center', fontSize: 8, bold: true },
                        {text: 'Cancelamento: ', alignment: 'center', fontSize: 8, bold: true},
                        {text: 'Comissão: ' + (Comissao.toFixed(2).replace('.', ',')) , alignment: 'center', fontSize: 8, bold: true},
                        {text: 'Custo: ' + (Custo.toFixed(2).replace('.', ',')) , alignment: 'center', fontSize: 8, bold: true },
                        {text: 'Lucro: ' + (Lucro.toFixed(2).replace('.', ',')) , alignment: 'center', fontSize: 8, bold: true },
                        {text: 'Per.Lucro: ' + (PerLucro.toFixed(2).replace('.', ',')) , alignment: 'center', fontSize: 8, bold: true},
                        {text: 'Percentual: ' + (Percentual.toFixed(2).replace('.', ',')) , alignment: 'center', fontSize: 8, bold: true},
                    ]
                ]
            }
        },
    ]

    const footer = (currentPage, pageCount) => {
        return [
            {
                text: 'Página ' + currentPage + ' de ' + pageCount,
                fontSize: 8,
                margin: [0, 10, 0, 0],
                bold: true,
                alignment: 'center',
            }
        ]
    }

    const docDefinitios = {
        pageSize: 'A4',
        pageOrientation: 'LANDSCAPE',
        pageMargins: [15, 15, 15, 40],
        content: [header, content],
        footer: footer,
    }
    pdfMake.createPdf(docDefinitios).open();
    //pdfMake.createPdf(docDefinitios).download();
}
