// function eleicao(){
//     var titulo, totalJose, totalJoao;
//     totalJose = 0;
//     totalJoao = 0;
//     do {
//       titulo = Number(prompt("Digite seu titulo de eleitor:"));
    
//       if (titulo >= 0) {
//         var voto = Number(
//           prompt("Candidatos:\n1 - José, Partido da Felicidade.\n2 - João, Partido da Esperança."
//           )
     
//         );
    
//         switch (voto) {
//           case 1:
//             totalJose++;
//             break;
//           case 2:
//             totalJoao++;
//             break;
//           default:
//             document.write("Voto nulo.");
//         }
//         console.log("Parabéns, cidadão!");
//       }
//     } while (titulo >= 0);
//     // exibir totais
//     document.write("Resultado:\nJosé teve " +totalJose +" votos.\nJoão teve " +totalJoao +" votos.");
    
//     if (totalJose > totalJoao) {
//       document.write("José foi eleito.");
//     } else if (totalJoao == totalJose) {
//       document.write("A eleição empatou, tirem no dado.");
//     } else {
//       document.write("João foi eleito.");
//     }
// }