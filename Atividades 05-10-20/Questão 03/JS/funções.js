var clique = document.getElementById('botao');
clique.addEventListener('click', addNota);

var imprimi = document.getElementById('imprimir');
imprimi.addEventListener('click', imprimir);

var res = document.getElementById('res');

var nota = document.getElementById('nota');
var notaV = [];


function addNota() {
    var valor = Number(nota.value);

    notaV.push(valor);

    nota.value = '';
}

function imprimir() {
    var soma = 0;

    for(var i =0; i < notaV.length; i++) {
        soma = soma + notaV[i];
    }

    soma = soma/4;

    if(soma >= 60){
        res.innerHTML = "Aluno Aprovado! notas do 1º=" + notaV[0] + " do 2º =" + notaV[1] + " do 3º=" + notaV[2] + " do 4º=" + notaV[3] + ". E a média =" + soma; 
    }else{
        res.innerHTML = "Aluno de Recuperação!";
    }
}

 var cliqueRe = document.getElementById('botao2');
 cliqueRe.addEventListener('click', addRecu);

 var res2 = document.getElementById('recuRes');

var notaRecu = document.getElementById('recu');


function addRecu() {
    var valorRecu = Number(notaRecu.value);

    if(valorRecu >= 60){
        res2.innerHTML = "Aluno passou com independencia!";
    }else{
        res2.innerHTML = "Aluno Reprovado!";
    }

    notaRecu.value = '';
}