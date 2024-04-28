//cada producto es un objeto
//todo el inventario es un arreglo de objetos
//1. Creacion de producto(id(contador++),nombre,precio,cantidad,descripción)
//2. duplicación de productos (id(nuevo++),nombre+=copy(copy2,copy3...))
//3. Visualización de productos(mostar array).
    //3.1. Ordenar la visualización de productos por ↓precio, ↑precio, cantidad, ↑cantidad.
    //3.2. Censurar las malas palabras de la descripción(['palabra1','palabra2','palabra3','palabra4','palabra5']), cambiarlas por *.
//4. Busqueda de productos(Buscar por nombre o por precio(rango con min y max))
//5. Actualización de producto(Seleccionar id y modificar el objeto(.find))
//6. Eliminación de productos(Seleccionar id y modificar el arreglo de inventario(.filter))
//7. Venta de producto(Verificar si hay existencia -> disminuir stock vendido)
//8. Compra de producto(Aumentar stock del producto comprado).
//9. Reporte general de productos.
    //9.1. Cantidad total de productos.
    //9.2. Cálcular el valor total del inventario (todos los productos(price*stock)).
    //9.3. Top 3 productos más baratos.
    //9.4. Top 3 productos más caros.
    //9.5. Top 3 productos con más stock.
    //9.6. Top 3 productos con menor stock.
    //9.7. Cantidad de productos con malas palabras en la descripción.
    //9.8. Mostrar los productos sin censurar las malas palabras.



//global variables
const inventory=[];
let i=true;
let choice=0;
let id=1;

//1
const createProduct=function(){
    let name=prompt("¿Cúal es el nombre del producto?:");
    let price=prompt("¿Cuál es el precio del producto?:");
    let stock=prompt("¿Cuantas unidades hay en existencia del producto?:")
    let description=prompt("Añadir descripcion adicional del producto:");
    inventory.push({id,name,price,stock,description});
    alert("Producto creado satisfactoriamente");
}

//2
const duplicateProducts=function(){

}

//3
const showProducts=function(array){
    let message="";
    let inventaryCopy=array;
    const badWords=["palabra1","palabra2","palabra3","palabra4","palabra5"];
    //3.2
    const censureBadWords=function(array){
        let censuredDescription="";
        array.forEach(element => {
            for (let i = 0; i < badWords.length; i++) {
                //3.2
                if(element.description.includes(badWords[i])){
                    censuredDescription=element.description.replace(badWords[i],"*****");
                    element.description=censuredDescription;
                }
            }
        });
    }
    if(inventaryCopy.length==0){
        message="No hay productos disponibles para mostrar";
    }else{
        censureBadWords(inventaryCopy);
        message="Productos disponibles:\n"
        inventaryCopy.forEach(element => {
            message+=`${element.id}. ${element.name}\n  Descripción:${element.description}`
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
                createProduct();
                id++;
                break
            case 2:
                alert(showProducts(inventory));
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
