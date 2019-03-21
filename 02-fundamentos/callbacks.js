
// setTimeout(() => {
//     console.log("Hola mundo");
// }, 2000);


let getUsuarioById=(id,callback)=>{

    let usuario={
        nombre:'Joel',
        id
    }

    if(id===20){
        return console.log(`El usuario ${ id } no existe`);
    }else{
        callback(null,usuario);
    }
};

getUsuarioById(10,(err,usuario)=>{
    if(err){
        return console.log(err);
    }
    console.log('Usuario de base de datos ',usuario)
});