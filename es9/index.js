// operador de reposo 

const obj = {
    name: 'oscar',
    age: 20,
    country: 'mx',
};

let {name, ...all} = obj; // extraigo solo una parte del objeto

console.log(all);

const obj =  {
    name: 'oscar',
    age: 20,
}

const obj1 = {
    ... obj, //operador de propagacion
    country: 'col',
}

console.log(obj1);


// promise . finally
const helloWorld = ()=>{
    return new Promise((resolve, reject)=> {
        (true)
        ? setTimeout(() => resolve('Hello World'), 2000)
        : reject(new Error('Test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'));


// MEJORAS EN REGEX

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const  match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);