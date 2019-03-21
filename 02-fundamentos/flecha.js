function sumar(a,b){
    return a+b;
}

console.log(sumar(2,6));

let sumarArrow= (a,b)=> a + b;

console.log(sumarArrow(4,6));

//let saludar= nombre =>`hola ${nombre}`; //tambien es valido cuando recibe un solo parametro la funcion
let saludar= (nombre)=>`hola ${nombre}`;

console.log(saludar('Joel'));