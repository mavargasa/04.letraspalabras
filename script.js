function capturarTexto() {
    var textoCapturado = '';
    var inputElement = document.getElementById('inputTexto');
    var resultadoElement = document.getElementById('resultado');

    while (inputElement.value !== '') {
        textoCapturado += inputElement.value + ' ';
        inputElement.value = prompt('Ingresa una palabra o letra');
    }

    resultadoElement.textContent = 'Palabras capturadas: ' + textoCapturado.trim();
}
