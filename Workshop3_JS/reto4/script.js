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
let id=1;
let message="";

const createEvent=function(){
    let name=prompt("Cúal es el nombre del evento");
    let date=prompt("Cuando es la fecha del evento");
    let description=prompt("Añadir descripcion adicional del evento");
    events.push({id,name,date,description});
}

const showEvents=function(){
    let message="";
    events.forEach(element => {
        message+=element.id+". "+element.name+"\n  Fecha: "+element.date+"\n  Descripción: "+element.description+"\n";
    });
    return message;
}

alert("Bienvenido a tu gestor de eventos");
while(i){
    choice=Number(prompt("1. Crear evento\n2. Ver eventos\n3. Buscar eventos\n4. Actualizar evento\n5. Eliminar evento\n6. Salir"));
    if((choice>0)&&(choice<7)){
        switch(choice){
            case 1:
                createEvent();
                id++;
                break
            case 2:
                alert(showEvents());
                break
            case 3:
                break
            case 4:
                choice=Number(prompt("¿Que id de evento quieres modificar?\n"+showEvents()));
                break
            case 5:
                choice=Number(prompt("¿Que id de evento quieres eliminar?\n"+showEvents()));
                break
            case 6:
                i=false;
                break
            default:
                console.error("Error")
        }
    }else{
        alert("Introduce una elección válida");
    }
}
alert("Gracias, hasta luego");