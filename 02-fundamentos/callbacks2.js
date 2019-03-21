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


let getEmpleado=(id,callback)=>{
    let empleadoDB= empleados.find(empleado=>empleado.id===id)
    if(!empleadoDB){
        callback(`No existe empleado ${ id }`);
    }
    else{
        callback(null,empleadoDB);
    }
}

getEmpleado(10,(err,emp)=>{
    if (err){
        return console.log(err);
    }
    console.log(emp);
});


let getSalario=(id,callback)=>{
    let empleadoDB= empleados.find(empleado=>empleado.id===id)
    if(empleadoDB){
        let salarioDB= salario.find(sal=>sal.id===id)
        if(!salarioDB){
            callback(`No se encontro un salario para el empleado  ${ empleadoDB.nombre.toUpperCase() }`);
        }
        else{
            callback(null,empleadoDB,salarioDB);
        }
    }else{
        callback(`No existe empleado ${ id }`);
    }
};


getSalario(
    3
    ,(err,emp,sal)=>{
    if (err){
        return console.log(err);
    }
    console.log({nombre:emp.nombre,salario:sal.salario});
});