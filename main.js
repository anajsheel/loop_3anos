
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quantas mundiais o palmeiras tem?");
   
   if (respostaTime.toLowerCase() === "nenhuma") {
    
      alert("Isso mesmo! Continue assim.");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Incorreto! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("O Santos está na série A ou B?");
   
   if (respostaTime.toLowerCase() === "Série B") {
    
      alert("Isso mesmo! Continue assim.");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Incorreto! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();
