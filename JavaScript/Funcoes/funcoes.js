console.clear()

/*
function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso de JavaScript')
}

saudacao()
*/

// Como enviar parâmetros para as functions?
function saudacao(nome, curso='HTML') {
    console.log(`Olá, ${nome}! seja bem-vindo(a) ao nosso curso de ${curso}`)
}

saudacao('Leeh')

// Retorno da função

function soma(n1, n2) {
    return n1 + n2
}

let resultado = soma(10,20)
console.log(resultado / 2)

console.clear()

function maiorDoQue50(numero) {
    if (numero > 50) {
        return true
    }
    
}