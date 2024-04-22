
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual nome da arena do Corinthians?");
   
   if (respostaTime.toLowerCase() === "Neo quimica arena") {
    
      alert("Isso mesmo! Continue assim.");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Incorreto! Tente novamente.");
    }
  }
}
// Chamada da função para iniciar o processo
verificarTime();

  

