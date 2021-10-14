/*  Las promesas se crean usando un constructor llamado Promise
    y pasandole una funcion que recibe dos parametros, 
    Resolve y reject
    que nos permiten indicarle a esta que se RESOLVIO o se RECHAZO
*/

const randomPromise = new Promise((resolve, reject)=>{
    const number  = Math.floor(Math.random() * 10);

    setTimeout(
        () => number > 5
        ? resolve(number)
        : reject(new Error(number + ' es menor a 5')),
        1000
    );
});

randomPromise
    .then(number => console.log(number))
    .catch(error => console.error(error));