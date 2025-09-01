import * as readline from 'readline';

// Ok esto se me complico un poco porque ya se me habia olvidado JS xD
// bueno la funcion es si va a pedir un string en este caso una pregunta
// para mas precisos y va a retornar una promesa que cuando se resulva
// o cundo se ingrese el la respuesta esta se va a cumplir

function question(input: string): Promise<string> {
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 
    // new Promise((resolve, reject)) -- cuando se crea una nueva promesa
    // esta viene por defecto con 2 funciones(callbacks) resolve = decir que ya se resolvio y se pasa
    // la solucion como un parametro y reject es para majejar los errores
    return new Promise((resolve) => {
        // en este caso input es la pregunta y en answer se va a gurdar la respuesta
        r1.question(input, (answer) => {
            // se cierra el modo de lectura porque ya no hay nadamas que leer :v
            r1.close();
            // y por ultimo se resuelve la promesa con el valor escito por el usuario
            resolve(answer);
        });
    });
}

// Esto esta genial no sabia que serviria de mucho el tipado xD
interface User {
    name: string,
    age: number
}

// En esta parte es mas legible como se puede ver asemos la promesa de retornar
// una cadena de personas y el count es cuantas personas van a ser ingresadas
async function new_users (count: number): Promise<User[]> {
    const users: User[] = [];

    for (let i = 0; i < count; i++) {
        // Aqui es muy facil de entender, basicamente llamamos a la funcion question
        // se le pregunta se espera a que el usuario conteste y almacena esa
        // respuesta en ask_name o ask_age :)))) happy por fin ;)
        const ask_name = await question("Nombre: ");
        const ask_age = await question("Edad: "); 
        // Se agrega ya por ultimo a la persona al array de persona
        // se tiene que parsear a la edad ya que el dato se pidio como un string
        users.push( { name: ask_name, age: parseInt(ask_age) } ); 
    }
    return users;
}

// Esto me sorprendio porque es una funcion auto ejecutable
// bueno solo se define al final con : "();" para decir que es autoejecutable
// mmm... en si se tiene que hacer asi porque si solo ejecutaramos la funcion new users
// este no saldria tan bien... ya que es un asyn/await por eso necesitamos tambien
// esto porque si no puff... asi esperamos a que se tome su tiempo, ya qeu en ts no
// podemo simplemente declar el await asi nadamas depende de una funcion async
(async () => {
    const values = await new_users(2);
    console.log("Usuarios: ", values)
})();