var clique = document.getElementById('botao');
clique.addEventListener('click', eleicao);

var jose = document.getElementById('jose');
var joao = document.getElementById('joao');

var totalJose = 0;
var totalJoao = 0;

function eleicao() {

    var titulo = 0;

    do {
        titulo = Number(prompt("Digite seu titulo de eleitor:"));

        if (titulo > 0) {

            var voto = Number(prompt("Candidatos:\n1 - José, Partido da Felicidade.\n2 - João, Partido da Esperança."));

            switch (voto) {
                case 1:
                    totalJose++;
                    alert("Voto no José com sucesso!");
                    break;
                case 2:
                    totalJoao++;
                    alert("Voto no João com sucesso!");
                    break;
                default:
            }
        }else{
            alert("Fim da votação!");
        }
    
    }while (titulo > 0);
    
    if(totalJose > totalJoao) {
        jose.innerHTML = "Parabéns candidato José - Vencedor!" + totalJose;
        joao.innerHTML = "Sinto muito candidato João - Perdedor! Quantidade de Votos =" + totalJoao;
    } else if(totalJoao > totalJose) {
        joao.innerHTML = "Parabéns candidato João - Vencedor!" + totalJoao;
        jose.innerHTML = "Sinto muito candidato Jose - Perdedor! Quantidade de Votos =" + totalJose;
    } else{
        jose.innerHTML = "Empate - Tirem no dado!" + totalJose;
        joao.innerHTML = "Empate! Tirem no dado!" + totalJoao;
    }
}
