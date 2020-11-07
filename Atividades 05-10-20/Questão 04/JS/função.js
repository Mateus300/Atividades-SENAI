var clique = document.getElementById('botao');
clique.addEventListener('click', aumento);

var res = document.getElementById('res');

var valor = document.getElementById('salario');

function aumento() {
    var num = Number(valor.value);
    var acres = 0;
    var salarioNovo = 0;

    if(num <= 1080){
        salarioNovo = num * 1.20;
        acres = salarioNovo - num;

        res.innerHTML = "Salário antes = R$" + num + ", Aumento de 20%, valor do aumento de = R$" + acres + ", o novo salário é = R$" + salarioNovo;
    } else if (num > 1080 & num <= 1700){
        salarioNovo = num * 1.15;
        acres = salarioNovo - num;

        res.innerHTML = "Salário antes = R$" + num + ", Aumento de 15%, valor do aumento de = R$" + acres + ", o novo salário é = R$" + salarioNovo;
    } else if (num > 1700 & num <= 2500){
        salarioNovo = num * 1.10;
        acres = salarioNovo - num;

        res.innerHTML = "Salário antes = R$" + num + ", Aumento de 10%, valor do aumento de = R$" + acres + ", o novo salário é = R$" + salarioNovo; 
    } else{
        salarioNovo = num * 1.5;
        acres = salarioNovo - num;

        res.innerHTML = "Salário antes = R$" + num + ", Aumento de 5%, valor do aumento de = R$" + acres + ", o novo salário é = R$" + salarioNovo; 
    }
}