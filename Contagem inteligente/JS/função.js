var clique = document.getElementById('botao');
clique.addEventListener('click', contar);

var num1 = document.getElementById('valorIni');
var num2 = document.getElementById('valorFim');
var res = document.getElementById('res');

var quant = [];

function contar() {
    var valorI = Number(num1.value);
    var valorF = Number(num2.value);

    if(valorI > valorF){
        for(var i = valorI; i >= valorF; i--){
            quant.push(i);
        }
    }else if(valorF > valorI){
        for(var i = valorF; i >= valorI; i--){
            quant.push(i);
        }
    }else if(valorF == valorI){
        alert('Digite valores diferentes!');
    }

    const resultado = document.createElement('p');
    resultado.innerHTML = `
    <br> Contando de ${valorI} até ${valorF} <br>
    ${quant.join(' \u{1F637} ')}`;

    res.appendChild(resultado);

    num1.value = '';
    num2.value = '';
    quant.splice(0, 1000);
}
console.log(quant)