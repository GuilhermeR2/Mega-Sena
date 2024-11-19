function gerarAleatorios() {
  const inicio = performance.now();

  // Cria um array de números de 1 a 60
  const numeros = Array.from({ length: 60 }, (_, i) => i + 1);

  // Embaralha o array 
  for (let i = numeros.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numeros[i], numeros[j]] = [numeros[j], numeros[i]];
  }

  // Seleciona os 6 primeiros números e os ordena
  const escolhidos = numeros.slice(0, 6).sort((a, b) => a - b);

  const fim = performance.now();
  const tempoExecucao = fim - inicio;

  // Exibe os resultados na página
  const divNumeros = document.getElementById("numeros");
  divNumeros.innerHTML = `Números gerados:<br>${escolhidos.join(", ")}`;
  divNumeros.style.animation = "fadeIn 1s ease-out";

  // Exibe o tempo de execução
  document.getElementById("tempo").textContent = `Tempo de execução: ${tempoExecucao.toFixed(6)} ms`;
}
