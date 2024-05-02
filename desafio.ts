/*
Crie uma função que ao receber o dia, mês e ano verifica se está correta
retornando a data completa, caso não seja possível pense em uma solução 
(acredito que é possível),utilizar a classe/objeto Date() do typescript
 para validação dos dados
 Nome: Yuri Dinato da Silva
*/
const teclado = require(`prompt-sync`)();

const dataAtual = new Date();
const diaDoMes = dataAtual.getDate();
const mesAtual = dataAtual.getMonth() + 1;
const anoAtual = dataAtual.getFullYear();

function verifica(): void {
    let dia: number = parseInt(teclado(`Digite o dia: `));
    let mes: number = parseInt(teclado(`Digite o mês: `));
    let ano: number = parseInt(teclado(`Digite o Ano: `));

    console.log(`Verificando...`);

    setTimeout(() => {
        if (dia == diaDoMes && mes == mesAtual && ano == anoAtual) {
            console.log(`Sua data esta correta, a data atual é ${diaDoMes}/${mesAtual}/${anoAtual}`);
        }
        if (dia != diaDoMes && mes != mesAtual && anoAtual != ano) {
            console.log(`Seu dia, mês e Ano estão incorretos. A data atual é ${diaDoMes}/${mesAtual}/${anoAtual}`);
        }
        if (dia != diaDoMes && mes == mesAtual && ano == anoAtual) {
            console.log(`O dia esta errado, o dia atual é ${diaDoMes}`);
        }
        if (dia == diaDoMes && mes != mesAtual && ano == anoAtual) {
            console.log(`O mês esta errado, o certo é ${mesAtual}`);
        }
        if (dia == diaDoMes && mes == mesAtual && ano != anoAtual) {
            console.log(`O ano esta errado, o ano atual é ${anoAtual}`);
        }
        if (dia != diaDoMes && mes != mesAtual && ano == anoAtual) {
            console.log(`O dia e o mês estão incorretos, a data atual é ${diaDoMes}/${mesAtual}/${anoAtual}`);
        }
        if (dia != diaDoMes && mes == mesAtual && ano != anoAtual) {
            console.log(`O dia e o ano estão incorretos, a data atual é ${diaDoMes}/${mesAtual}/${anoAtual}`);
        }
        if (dia == diaDoMes && mes != mesAtual && ano != anoAtual) {
            console.log(`O mês e o ano estão incorretos, a data atual é ${diaDoMes}/${mesAtual}/${anoAtual}`);
        }
        exibir();
    }, 3000);
}

verifica();

function exibir() {
    console.log(` ------------------   `);
    console.log(`|   DATA ATUAL!!   |  `);
    console.log(`|                  |  `);
    console.log(`|     ${diaDoMes}/${mesAtual}/${anoAtual}     |  `);
    console.log(`|                  |  `);
    console.log(`|                  |  `);
    console.log(`|                  |  `);
    console.log(`|                  |  `);
    console.log(`|                  |  `);
    console.log(` ------------------`);
}
