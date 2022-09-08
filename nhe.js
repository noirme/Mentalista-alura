var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "você acertou! :D";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "digite um número de ZERO a DEZ";
  } else {
    elementoResultado.innerHTML = "errou D: mas tenta de novo!";
  }
}
