// const multiplicar = require('./multiplicar/multiplicar'); 
const {crearArchivo} = require('./multiplicar/multiplicar'); 

let argv=process.argv;
let parametro = argv[2];
let base=parametro.split('=')[1];
console.log(base);

//  multiplicar.crearArchivo(base)

crearArchivo(base)
  .then(archivo=>console.log(`Archivo creado: ${ archivo }`))
  .catch(e=>(console.log(e)));

