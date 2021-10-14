/* Devolver la clave y los valores de una matriz */

const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}
const entries = Object.entries(data); // convierte los objetos en un arreglo
console.log(entries);
console.log(entries.length);

//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 

const data = {
    frontend: 'oscar',
    backend: 'isabel',
    design: 'ana',
}

const values = Object.values(data);
console.log(values);

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string
// como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string = 'hello';
console.log(string.padStart(8,'hi '));
console.log(string.padEnd(12,'------'));


// ASYNC AWAIT PROMESAS

// EJEMPLO 1

const delay = () => {
    return new Promise(
        resolve => setTimeout(resolve, 1000)
    )
};

const counter = async() => {
    await delay();
    console.log('1 seg');
    await delay();
    console.log('2 seg');
    await delay();
    console.log('3 seg');
    await delay();
    console.log('4 seg');
};
counter();

// EJEMPLO 3

const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (true) // condicional if
        ? setTimeout(()=>resolve('Hello World'),2000) //settime es una funcion que resive dos parametros, en el primero una funcion y en el segundo es el tiempo
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => { // va a implementar el async y luego el await
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherFunction();