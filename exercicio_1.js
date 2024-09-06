

function somar(indice){

    let soma = 0
    let k = 0

    while (k < indice){
        k += 1
        soma += k
    }
    return `Valor de soma é ${soma}.`
}

const indice = 13

console.log(somar(13))

