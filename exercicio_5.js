

function inverterPalavras(texto) {
    let pilha = []; 
    let textoInvertido = '';
    let letra;
    let i = 0;

    while (i < texto.length) {
        
        while (i < texto.length && texto[i] !== ' ') {
            pilha.push(texto[i]);
            i++;
        }

        while (pilha.length > 0) {
            letra = pilha.pop();
            textoInvertido += letra;
        }

        if (i < texto.length) {
            textoInvertido += ' ';
        }

        i++;
    }

    return textoInvertido;
}

console.log(inverterPalavras('Exercicio teste developer'));