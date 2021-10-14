// dinamic import 

/*  realziar importaciones de algun elemento de forma 
dinamica para poder llamar piezas de codigo de una manera mas optima */

const button = document.getElementById("btn");

button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello();
});

// addeventlistener permite escuchar alguna accion que va a ocurrir


const bigNumber = 123456789455n; 

const anotherBigNumber = BigInt(34567876543);

console.log(bigNumber);
console.log(anotherBigNumber);


// promise all settled

const promise1  = new Promise((resolve, reject)=> reject("reject"));
const promise2  = new Promise((resolve, reject)=> resolve("resolve"));
const promise3  = new Promise((resolve, reject)=> resolve("resolve 1"));

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response))
.catch((error) => console.log(error));

// GLOBAL THIS

console.log(windows);
console.log(globalThis);


// operador nulo

// pregunta ?? para saber si el valor es nulo

const fooo = null ?? 'default string';
console.log(fooo);

// opcional chaining
const user = {};
console.log(user?.profile?.email);
if (user?.profile?.email){
    console.log("Existe");
}else{
    console.log("Fail");
}