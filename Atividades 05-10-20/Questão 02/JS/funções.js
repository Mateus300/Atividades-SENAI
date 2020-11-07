var clique = document.getElementById('botao');
clique.addEventListener('click', addNum);

var imprimi = document.getElementById('imprimir');
imprimi.addEventListener('click', imprimir);

var numeros = document.getElementById('num'); 

var res = document.getElementById('res');

var par = [];
var impar = [];

function addNum() {

    var valor = Number(numeros.value);
    
    
    if(valor %2 ==0) {
        par.push(valor);
    }else{
        impar.push(valor);
    }


    numeros.value = '';
    
}



function imprimir() {
    var soma = 0;
    var mult = 1;

    for(var i = 0; i < par.length; i++) {
        soma = soma + par[i];
    }

    for(var i = 0; i < impar.length; i++) {
        mult = mult * impar[i];
    }

    res.innerHTML = "A soma dos números =" + soma + ".E a multiplicação =" + mult;
}