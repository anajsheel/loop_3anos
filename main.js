
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quantas mundiais o palmeiras tem?");
   
   if (respostaTime.toLowerCase() === "Nenhuma") {
    
      alert("Isso mesmo! Continue assim.");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Incorreto! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  

