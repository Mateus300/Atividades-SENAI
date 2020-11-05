var clique = document.getElementById("botao")

clique.addEventListener("click", quesO1)

function quesO1() {
    var nome = document.getElementById("nome");
    var salario = document.getElementById("salario");
    var res = document.getElementById("res");

    var n1 = Number(salario.value);

    var novoSal = n1 * 1.10;

    res.innerHTML = nome.value + " seu novo salario é : R$" + novoSal;
}

var clique2 = document.getElementById("botao2");

clique2.addEventListener('click', ques02);

function ques02() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var res = document.getElementById("res2");
    var c = 0;

    var a = Number(num1.value);
    var b = Number(num2.value);

    if(a == b){
        c = a + b;
        res.innerHTML = c;
    }
    else {
        c = a * b;
        res.innerHTML = c;
    }
}

var clique3 = document.getElementById("botao3");

clique3.addEventListener('click', ques03);

function ques03() {
    var preco = document.getElementById("preço");
    var parcela = document.getElementById("parcela");
    var res = document.getElementById("res3");

    var pagar = 0;

    var valor = Number(preco.value);

    var par = Number(parcela.value);

    switch (par) {
        case 3 :
            pagar = valor * 1.10;
            res.innerHTML = "O valor a pagar é R$"+ pagar;
            break;
        case 5 :
            pagar = valor * 1.20;
            res.innerHTML = "O valor a pagar é R$"+ pagar;
            break;
        default:
            alert("Número invalido");
    }
}

var clique4 = document.getElementById("botao4");

clique4.addEventListener('click', ques04);

function ques04() {
    var nome = document.getElementById("aluno");
    var nota1 = document.getElementById("nota1");
    var nota2 = document.getElementById("nota2");
    var nota3 = document.getElementById("nota3");
    var res = document.getElementById("res4");

    var media = 0;
    var soma = 0;

    var n1 = Number(nota1.value);
    var n2 = Number(nota2.value);
    var n3 = Number(nota3.value);

    soma = n1+n2+n3;
    
    media = soma/3;

    if(media >= 8) {
        res.innerHTML = "Aluno "+ nome.value + " está Aprovado! Media = " + media;
    }
    else {
        res.innerHTML = "Aluno "+ nome.value + " está Reprovado! Media = " + media;
    }

}

var clique5 = document.getElementById("botao5");

clique5.addEventListener('click', ques05);

function ques05() {
    var real1 = document.getElementById("real1");
    var real2 = document.getElementById("real2");
    var res = document.getElementById("res5");
    var opcao = document.getElementById("opc");

    var valor = 0;
    var valorFormatado = 0;

    r1 = Number(real1.value);
    r2 = Number(real2.value);


    var opc = Number(opcao.value);

    switch (opc) {
        case 1:
            valor = r1 + r2;
            valorFormatado = valor.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' });
            res.innerHTML = valorFormatado;
            break;
        case 2:
            valor = r1 * r2;
            valorFormatado = valor.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' });
            res.innerHTML = valorFormatado;
            break;
        case 3:
            valor = r1/r2;
            valorFormatado = valor.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' });
            res.innerHTML = valorFormatado;
            break;
        default:
            alert("Número invalido");
    }
}
