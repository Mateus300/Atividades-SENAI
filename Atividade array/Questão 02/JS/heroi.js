var clique = document.getElementById('botao');
clique.addEventListener('click', temChave);

// var heroi = ['espada', 'chave', 'escudo', 'armadura', 'comida'];

var bolsa = document.getElementById('bolsa');

var heroi = [];

var str = "nome";


function temChave() {

    var valor = String(bolsa.value);
    
    heroi.push(valor);

   for(var i = 0; i < heroi.length; i++) {

        if(heroi[i] == 'chave'){
            chave()
        }else{
        }
   }

   bolsa.value = '';

    // for(var i = 0; i < heroi.length; i ++) {
    //     if (heroi[i] == 'chave') {
    //         chave()
    //     }else{
    //     }
    // }
}

function chave () {
    alert("Ele tem a chave!");
}

console.log(heroi);