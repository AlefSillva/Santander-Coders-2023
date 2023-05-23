console.clear()

let arr1 = [38, 12, 45, 34, 29]
let arr2 = []
// - Fatiamento "slice"

console.log(arr1.slice(0,2)) // mostra o inicio do fatiamento começando no elemento no índice "0" e o "2" define a quantidade de elementos que serão pegos.

console.clear()

console.log('Antes de adicionar', arr2)

arr2.push(10,12)

console.log('Depois de adicionar', arr2)

// CONCATENAR ARRAY:


const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
console.log(array2.concat(array1));

console.clear()

console.log(arr1)

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34)

console.clear()

console.log(arr1)

console.log(arr1.includes(55))