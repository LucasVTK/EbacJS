function compararNumeros() {
    // Obtém os valores dos campos de entrada
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Obtém o elemento onde queremos exibir o resultado
    const resultadoElement = document.getElementById('resultado');

    // Verifica se ambos os valores são números válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Compara os números
        if (numero1 > numero2) {
            resultadoElement.textContent = "O primeiro número é maior que o segundo.";
        } else if (numero1 < numero2) {
            resultadoElement.textContent = "O primeiro número é menor que o segundo.";
        } else {
            resultadoElement.textContent = "Os números são iguais.";
        }
    } else {
        resultadoElement.textContent = "Por favor, insira números válidos.";
    }
}

// Adiciona um ouvinte de evento para o evento submit do formulário
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    compararNumeros(); // Chama a função para comparar números
});
