let arr = ['Leeh', 28, 1.70, true]

console.log(arr)

// - Como acessar os elementos do array

console.log('Primeiro elemento', arr[0])
console.log('Segundo elemento', arr[1])
console.log('Terceiro elemento', arr[2])
console.log('Quarto elemento', arr[3])

// - Como obeter o tamanho do array:

console.log(arr.length)

// - Percorrendo arrays 
console.clear()

// - 1º Método de percorrer usando "FOR"
for ( let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// - 2º Método usando o "FOR OF"

console.clear()

for (let elemento of arr) {
    console.log(elemento)
}

// - 3º Método usando "FOR IN":

console.clear()

for (let indice in arr) {
    console.log(indice, arr[indice])
}