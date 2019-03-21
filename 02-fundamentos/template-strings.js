let nombre ='Joel';
let real ='Isaias';

console.log(nombre+' '+real);
console.log(`${nombre} ${real}`);

function getNombre(){
    return `el primer nombre es ${nombre} y el segundo es ${real}`;
}

console.log(`${getNombre()}`);