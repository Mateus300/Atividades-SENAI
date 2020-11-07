var clique = document.getElementById('botao');
clique.addEventListener('click', addNota);

var imprimi = document.getElementById('imprimir');
imprimi.addEventListener('click', imprimir);

var idade = document.getElementById('idade');

var nota = document.getElementById('nota');

var res = document.getElementById('res');

// var regular = 0;
// var porcentagem = 0;
// var media = 0;
// var i = 0;

var bom = [];
var regular = [];
var otimo = [];
var total = 0;

function addNota() {
    var notas = Number(nota.value);


    switch (notas) {
        case 1:
            regular.push(nota);            

            break;
        case 2:
            bom.push(nota);

            break;
        case 3:
            otimo.push(nota)
            var soma = soma + idade;
    

            break;
        default:
            alert("Opção inválida!");
    }
    
    nota.value = '';
    idade.value = '';
}

console.log(addNota)


function imprimir() {
    total = bom.length + regular.length + otimo.length;

    var porcentagem = 0;
    var valorBom = 0;
    
    var media = 0; 
    var valorOtimo = 0;
    var n = 0;


    for(var i = 0; i < bom.length;i++) {
        valorBom = valorBom + bom[i]
    };

    for(var i = 0; i < otimo.length; i++) {
        n = n++;
        media = media + otimo[i];
    };

    valorOtimo = media/n.value;

    porcentagem = total * valorBom/100;

//     res.innerHTML = "No total foram " + total + " pessoas que participaram da pesquisa.O total de pessoas que votaram regular foi: " + regular.length + " .A média das idades de quem votou ótimo foi: " + valorOtimo + " .A porcentagem de quem voto em bom foi: " + porcentagem + ".";
// }

res.innerHTML = ` O Total de votos cadastrados foi: ${total}.O total que votaram regular foi: ${regular.length}. A média das idades de quem votou foi: ${valorOtimo}.A porcentagem dos que votaram bom é: ${valorBom} `};
console.log(imprimir)