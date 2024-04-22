
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quem é o melhor e mais chato professor?");
   
   if (respostaTime.toLowerCase() === "miderson") {
    
      alert("Isso mesmo! Continue assim.");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Incorreto! Tente novamente.");
    }
  }
}
// Chamada da função para iniciar o processo
verificarTime();

  

