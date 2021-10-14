// REplace solo reemplazaba el primer elemento

const string = "Js es maravilloso con Js puedo crear el futuro de la web";

const replacedString = string.replace('Js','python');
console.log(replacedString);

const replacedString2 = string.replaceAll("Js","Python");
console.log(replaceString2);


// metodos privados

class Message {
     #show(val){  // por la # volvemos el metodo privado
         console.log(val);
     }
}
const message = new Message();
message.show('hola');

//Promise Any

const promise1 = new Promise((resolve, reject)=> reject("1"));
const promise2 = new Promise((resolve, reject)=> resolve("2"));
const promise3 = new Promise((resolve, reject)=> resolve("3"));

Promise.any([promise1,promise2,promise3])
 .then(response => console.log(response));


 // nurevos operadores logicos

 let istrue = true;
 let isfalse = false;
 console.log(istrue &&= isfalse);

 let istrue = true;
 let isfalse = false;
 console.log(istrue ||= isfalse);

 let istrue = undefined;
 let isfalse = false;
 console.log(istrue ??= isfalse);