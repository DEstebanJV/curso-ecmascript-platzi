let array = [1,2,3 [1,2,3,[1,2,3]] ];

// devolver una matriz con otra matriz

console.log(array.flat(2)) // profundidad

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));


// eliminar espacios en blanco de un string

let hello = '      hello ';
console.log(hello);
console.log(hello.trimStart()); // elimina los espacios de mas en el inicio
let hello = 'hello         ';
console.log(hello);
console.log(hello.trimEnd());


// pasar parametro opcional al parametro de catch

try {

} catch(error){ // no es necesario pasar el parametro error
  error
}

/* convertir arreglos en objetos  */

let entries = [["name", "oscar"],["age", 32]];
console.log(Object.fromEntries(entries));

let mySymbol = "My symbol";
let symbol = Symbol(mySymbol);
console.log(Symbol.description); 