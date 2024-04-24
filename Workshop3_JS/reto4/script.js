const events=[];
let i=true;
let choice=0;
let id=1;

const createEvent=function(){
    let name=prompt("Cúal es el nombre del evento");
    let date=prompt("Cuando es la fecha del evento");
    let description=prompt("Añadir descripcion adicional del evento");
    events.push({id,name,date,description});
    alert("Evento creado satisfactoriamente");
}

const showEvents=function(array){
    let message="";
    if(events.length==0){
        message="No hay eventos para mostrar"
    }else{
        array.forEach(element => {
            message+=element.id+". "+element.name+"\n  Fecha: "+element.date+"\n  Descripción: "+element.description+"\n";
        }); 
    }
    return message;
}

const modifyEvent=function(){
    let j=true;
    let eventSelect={};
    let flag=false;
    let k=true;
    while(j){
        choice=Number(prompt("¿Que id de evento quieres modificar?\n"+showEvents(events)));
        events.forEach(element => {
            if(element.id==choice){
                flag=true;
                eventSelect=element;
                while(k){
                    choice=Number(prompt("¿Que deseas modificar\n1. Nombre\n2. Fecha\n3. Descripción\n4. Cancelar"));
                    if((choice>0)&&(choice<5)){
                        switch(choice){
                            case 1:
                                eventSelect.name=prompt("Introduzca el nuevo nombre del evento");
                                for (let i = 0; i < events.length; i++) {
                                    if(events[i].id==eventSelect.id){
                                        events[i]=eventSelect;
                                    }
                                }
                                alert("Cambios guardados satisfactoriamente");
                                break;
                            case 2:
                                eventSelect.date=prompt("Introduzca la nueva fecha del evento");
                                for (let i = 0; i < events.length; i++) {
                                    if(events[i].id==eventSelect.id){
                                        events[i]=eventSelect;
                                    }
                                }
                                alert("Cambios guardados satisfactoriamente");
                                break;
                            case 3:
                                eventSelect.description=prompt("Introduzca la nueva descripción del evento");
                                for (let i = 0; i < events.length; i++) {
                                    if(events[i].id==eventSelect.id){
                                        events[i]=eventSelect;
                                    }
                                }
                                alert("Cambios guardados satisfactoriamente");
                                break;
                            case 4:
                                k=false;
                                break;
                        }
                    }else{
                        alert("Introduzca un valor válido");
                    }
                }    
            }
        });
        if(flag==true){
            j=false;
            break;
        }else{
        alert("Introduce un evento de la lista")
        }
    }
}

const deleteEvent=function(){
    let j=true;
    let flag=false;
    while(j){
        choice=Number(prompt("¿Que id de evento quieres eliminar?\n"+showEvents(events)));
        for (let i = 0; i < events.length; i++) {
            if(events[i].id==choice){
                flag=true;
                events.splice(events[i]-1,1);
                alert("Evento eliminado satisfactoriamente");
            }  
        }
        if(flag==true){
            j=false;
            break;
        }else{
        alert("Introduce un evento de la lista")
        }
    }
}

const searchEvent=function(){
    const filteredArray=[];
    choice=prompt("Buscador de eventos");
    events.forEach(element => {
        if(element.name.includes(choice)){
            filteredArray.push(element);
        }
    });
    alert(showEvents(filteredArray));
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
                alert(showEvents(events));
                break
            case 3:
                searchEvent();
                break
            case 4:
                modifyEvent();
                break;
            case 5:
                deleteEvent();
                break;
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