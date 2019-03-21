let empleados=[{
    id:1,
    nombre:'Joel'
},{
    id:2,
    nombre:'Ruth'
},{
    id:3,
    nombre:'Nathaly'
}];

let salario=[
    {
        id:1
        ,salario:1000
    },{
        id:2
        ,salario:2000
    }
];


let getEmpleado=(id)=>{
    return new Promise((resolve,reject)=>{
        let empleadoDB= empleados.find(empleado=>empleado.id===id)
    if(!empleadoDB){
        reject(`No existe empleado ${ id }`);
    }
    else{
        resolve(empleadoDB);
    }
    });
}

let getSalario=(empleado)=>{
    return new Promise((resolve,reject)=>{
        let salarioDB= salario.find(sal=>sal.id===empleado.id)
    if(!salarioDB){
        reject(`No se encontro un salario para el empleado ${ empleado.nombre }`);
    }
    else{
        resolve({
            nombre:empleado.nombre,
            salario:salarioDB.salario,
            id:empleado.id
        });
    }
    });
}

getEmpleado(2).then(emp=>{
    console.log(emp);

    getSalario(emp).then(sal=>{
        console.log(sal);
    },err=>{
        console.log(err);
    });

},err=>{
    console.log(err);
});

//promesas en cadena

getEmpleado(10).then(emp=>{
   return getSalario(emp);
})
.then(resp=>{
    console.log( `El salario de ${ resp.nombre} es de ${ resp.salario}$`)
})
.catch(err=>{
    console.log(err);
});

