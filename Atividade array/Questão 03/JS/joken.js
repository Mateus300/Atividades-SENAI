var opcoes = ['papel', 'pedra', 'tesoura'];

var res = document.getElementById('res');

var gameover = false;
var pontuacao = 0;

var clique = document.getElementById('botao');
clique.addEventListener('click', jogada);

function jogada() {

    do {
        var opcao = Number(prompt("Escolha sua jogada:\n1 - Papel\n2 - Pedra\n3 - Tesoura"));
        
        if(opcao > 0 && opcao < 4) {
            var op = 0;
            op = opcao - 1;
            var resp = Math.ceil(Math.random()*3);
            alert("O computador jogou " + opcoes[resp-1] + "\n Você jogou " + opcoes[op]);

            if(opcao == resp) {

                alert("A jogada empatou!\n O computador jogou " + opcoes[resp-1] + "\n Você jogou " + opcoes[op]);

                jogada();
            }else if ((opcao == 1 && resp == 2) || (opcao == 2 && resp == 3) || (opcao == 3 && resp == 1)) {
            
                alert("Você ganhou! \n O computador jogou " + opcoes[resp-1] + "\n Você jogou " + opcoes[op]);
            
                pontuacao++;

                jogada();
            }else {
                gameover = true;
            }

        } else{
            gameover = true;
        }

    } while (gameover === false);

    res.innerHTML = "Você perdeu!  Sua pontuação é = " + pontuacao;

}

console.log(jogada)