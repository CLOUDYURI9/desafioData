/*
Crie uma função que ao receber o dia, mês e ano verifica se está correta
retornando a data completa, caso não seja possível pense em uma solução
(acredito que é possível),utilizar a classe/objeto Date() do typescript
 para validação dos dados
 Nome: Yuri Dinato da Silva
*/
var teclado = require("prompt-sync")();
var dataAtual = new Date();
var diaDoMes = dataAtual.getDate();
var mesAtual = dataAtual.getMonth() + 1;
var anoAtual = dataAtual.getFullYear();
function verifica() {
    var dia = parseInt(teclado("Digite o dia: "));
    var mes = parseInt(teclado("Digite o m\u00EAs: "));
    var ano = parseInt(teclado("Digite o Ano: "));
    console.log("Verificando...");
    setTimeout(function () {
        if (dia == diaDoMes && mes == mesAtual && ano == anoAtual) {
            console.log("Sua data esta correta, a data atual \u00E9 ".concat(diaDoMes, "/").concat(mesAtual, "/").concat(anoAtual));
        }
        if (dia != diaDoMes && mes != mesAtual && anoAtual != ano) {
            console.log("Seu dia, m\u00EAs e Ano est\u00E3o incorretos. A data atual \u00E9 ".concat(diaDoMes, "/").concat(mesAtual, "/").concat(anoAtual));
        }
        if (dia != diaDoMes && mes == mesAtual && ano == anoAtual) {
            console.log("O dia esta errado, o dia atual \u00E9 ".concat(diaDoMes));
        }
        if (dia == diaDoMes && mes != mesAtual && ano == anoAtual) {
            console.log("O m\u00EAs esta errado, o certo \u00E9 ".concat(mesAtual));
        }
        if (dia == diaDoMes && mes == mesAtual && ano != anoAtual) {
            console.log("O ano esta errado, o ano atual \u00E9 ".concat(anoAtual));
        }
        if (dia != diaDoMes && mes != mesAtual && ano == anoAtual) {
            console.log("O dia e o m\u00EAs est\u00E3o incorretos, a data atual \u00E9 ".concat(diaDoMes, "/").concat(mesAtual, "/").concat(anoAtual));
        }
        if (dia != diaDoMes && mes == mesAtual && ano != anoAtual) {
            console.log("O dia e o ano est\u00E3o incorretos, a data atual \u00E9 ".concat(diaDoMes, "/").concat(mesAtual, "/").concat(anoAtual));
        }
        if (dia == diaDoMes && mes != mesAtual && ano != anoAtual) {
            console.log("O m\u00EAs e o ano est\u00E3o incorretos, a data atual \u00E9 ".concat(diaDoMes, "/").concat(mesAtual, "/").concat(anoAtual));
        }
        exibir();
    }, 3000);
}
verifica();
function exibir() {
    console.log(" ------------------   ");
    console.log("|   DATA ATUAL!!   |  ");
    console.log("|                  |  ");
    console.log("|     ".concat(diaDoMes, "/").concat(mesAtual, "/").concat(anoAtual, "     |  "));
    console.log("|                  |  ");
    console.log("|                  |  ");
    console.log("|                  |  ");
    console.log("|                  |  ");
    console.log("|                  |  ");
    console.log(" ------------------");
}
