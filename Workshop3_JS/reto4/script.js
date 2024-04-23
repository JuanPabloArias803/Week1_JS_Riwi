//creacion de eventos
    //id
    //nombre
    //fecha
    //descripción
//busqueda y visualizacion de los eventos
//actualizar los eventos
//eliminar eventos

const events=[];
let i=true;
let choice=0;

const createEvent=function(name,date,description){
    let id=1;
    events.push({id,name,date,description});
    id++;
}

alert("Bienvenido a tu gestor de eventos");
while(i){
    choice=Number(prompt("1. Crear evento\n2. Ver eventos\n3. Buscar eventos\n4. Actualizar evento\n5. Eliminar evento\n6. Salir"));
    if((choice>0)&&(choice<7)){
        //ejecución del programa
    }else{
        alert("Introduce una elección válida");
        i=false;
        break;
    }
}