/* parametros por defecto */

function newFunctionEs6(name = 'oscar', age = '20', country = 'col'){
    console.log(name,age,country)
}

newFunctionEs6();
newFunctionEs6('pedro',20,'col');

// Template literal

let hello = "hello";
let world =  "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// template literales `` son con las comillas francesas
let epicPhrase2 = `${hello} ${world}`; // es6
console.log(epicPhrase2);


/* LET y CONST multilinea spread operator y desestructuracion */

let lorem = "aca vamos a colocar cualquier cosa que vamos a demostrar una cosa \n"
+ "demostrando como se saparaba en js6";

/* en ecma6 */
let lorem2 = `otra frase epica que necesitamos
donde ahora podemos saltar lineas buajajajja 
del putas papi aprenda
`;

console.log(lorem);
console.log(lorem2);

/* Desestructuracion de elementos */

let person= {
    'name': 'oscar',
    'age': 20,
    'country': 'mx',
}

console.log(person.name,person.age);

/* desestructuracion */

let {name, age, country} = person;

console.log( name, age, country);


/* operador de propagacion */

let team1 = ['oscar', 'david', 'julian', 'pedro'];
let team2 = ['camila', 'papita', 'jimena', 'pedro'];

let education = ['David', ...team1, ...team2];

console.log(education);

/* let  */

// let solo es posible utilizarse en el scope donde fue inicializado

{
    var globalVar = 'global var';
}

{
    let globalLet = 'global let';
    console.log(globalLet);
}

console.log(globalVar);


/* const UNA VARIABLE QUE NO PUEDE CAMBIAR CON EL TIEMPO */

const a = 'b';
 

/* objetos */

/* ecs5 */
let name = 'David';
let age = '20';

obj = {name: name, age: age};

/* ecs6 */

obj2 = {name, age};

console.log(obj2);

/* arrow function */

const names = [
    {name: 'oscar', age: 20},
    {name: 'david', age: 20}
];

/* es5 */
let listOfNames = names.map(function(item){
    console.log(item.name);
})

/* es6 */

let listOfNames2 = names.map(item => console.log(item.name));

/* promesas */

// algo va a pasar

// sintaxis

const helloPromise = () => {
    return new Promise((resolve, reject) =>{ //composision
        if(false){
            resolve('Hey'); //resolve comportamiento al cumpliar la promesa
        }else{
            reject('ups'); //reject comportamiento al fallar la promesa
        }
    } );
}

helloPromise()
    .then(response => console.log(response)) //.then obtener el valordel resolve
    .catch(error => console.log(error)); //.catch obtener el valor de reject

// clases

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA =  valueA;
        this.valueB = valueB;
        return this. valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

// sintaxis para importar es5
const hello = require('./module.js')
console.log(hello());
// es6
/* import { hello } from './module';
hello(); */

/* generadores */

function* helloWorld(){
    if (true){
        yield 'hello,';

    }
    if(true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// agrimonitor  