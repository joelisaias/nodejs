//requires
const fs = require('fs'); //fileSystem

let crearArchivo=( base )=>{
    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`La base no ${base} es un numero`);
        }

        let multiplicar = (fac1,fact2)=>(fac1*fact2);
        let data= '';
        for (let i=1;i<=12;i++){
            data +=`${ base } * ${ i } = ${ multiplicar(base,i)} \n`;
        };


        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) 
                reject(err) ;
            else
                resolve(`tabla-${ base }.txt`);
        });
    }

    );
//export Multiplicar=;
}

module.exports ={
    crearArchivo
};
