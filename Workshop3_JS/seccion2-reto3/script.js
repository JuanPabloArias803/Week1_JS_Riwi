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
    //9.5. Top 3 productos con menor stock.
    //9.6. Top 3 productos con más stock.
    //9.7. Cantidad de productos con malas palabras en la descripción.
    //9.8. Mostrar los productos sin censurar las malas palabras.



//global variables
const inventory=[];
let i=true;
let choice=0;
let id=1;

//1
const createProduct=function(){
    let i=true;
    let name="";
    let price="";
    let stock="";
    while(i){
        name=prompt("¿Cúal es el nombre del producto?:");
        if(name==""){
            alert("Introduce un nombre al producto.");
        }else{
            i=false;
        }
    }
    i=true;
    while(i){
        price=Number(prompt("¿Cuál es el precio del producto?:"));
        if((isNaN(price))||(price=="")){
            alert("Introduce un precio válido.")
        }else{
            i=false;
        }
    }
    i=true;
    while(i){
        stock=Number(prompt("¿Cuantas unidades hay en existencia del producto?:"));
        if((isNaN(stock))||(stock=="")){
            alert("Introduce una cantidad válida.")
        }else{
            i=false;
        }
    }
    let description=prompt("Añadir descripcion adicional del producto:");
    inventory.push({id,name,price,stock,description});
    alert("Producto creado satisfactoriamente");
}

//2
const duplicateProducts=function(array){
    if(array.length==0){
        alert("Aún no hay productos para duplicar.")
        return
    }
    let choice=0;
    let i=true;
    let flag=false;
    let duplicateProduct={};
    const validateProductName = function(name) {
        let count=1;
        let originalName=name;
        array.forEach(element => {
            if(element.name==name){
                name=originalName+"-copy"+String(count);
                count++;
                validateProductName(name);
            }
        });
        return name;
    }
    while(i){
        choice=prompt("¿Que id de producto quieres duplicar?:\n"+showProducts(array));
        array.forEach(element => {
            if(element.id==choice){
                flag=true;
                duplicateProduct={id,name:validateProductName(element.name),price:element.price,stock:element.stock,description:element.description};
                inventory.push(duplicateProduct)
                alert("Producto duplicado satisfactoriamente");
            }
        });
        if(flag==true){
            i=false;
            break;
        }else{
        alert("Introduce un evento de la lista.")
        }
    }
}

//3
const showProducts=function(array){
    let message="";
    let inventaryCopy=array;
    
    //3.1
    const orderBy=function(array){
        let choice=0;
        let i=true;
        let sortedArray=[];
        while(i){
            choice=Number(prompt("Deseas ordenar la vista de los productos por:\n 1. ↓Precio.\n 2. ↑Precio.\n 3. ↓Cantidad.\n 4. ↑Cantidad.\n 5. ↓ID.\n 6. ↑ID."));
            switch (choice) {
                case 1:
                    i=false;
                    sortedArray= array.sort(
                        (p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);
                    break;
                case 2:
                    i=false;
                    sortedArray= array.sort(
                        (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
                    break;
                case 3:
                    i=false;
                    sortedArray= array.sort(
                        (p1, p2) => (p1.stock > p2.stock) ? 1 : (p1.stock < p2.stock) ? -1 : 0);
                    break;
                case 4:
                    i=false;
                    sortedArray= array.sort(
                        (p1, p2) => (p1.stock < p2.stock) ? 1 : (p1.stock > p2.stock) ? -1 : 0);
                    break;
                case 5:
                    i=false;
                    sortedArray= array.sort(
                        (p1, p2) => (p1.id > p2.id) ? 1 : (p1.id < p2.id) ? -1 : 0);
                    break;
                case 6:
                    i=false;
                    sortedArray= array.sort(
                        (p1, p2) => (p1.id < p2.id) ? 1 : (p1.id > p2.id) ? -1 : 0);
                    break;
                default:
                    alert("Selecciona una opción válida");
                    break;
            }
        }
        return sortedArray;
    }

    //3.2
    const censureBadWords=function(array){
        const badWords=["palabra1","palabra2","palabra3","palabra4","palabra5"];
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
        inventaryCopy=orderBy(inventaryCopy);
        inventaryCopy.forEach(element => {
            message+=`${element.id}) ${element.name}.\n  Precio: ${element.price}.\n  Cantidad: ${element.stock}.\n  Descripción: ${element.description}.\n`;
        });
    }
    return message;
}

//4
const searchProducts=function(array){
    let minSearch=0;
    let maxSearch=0;
    let choice=null;
    let i=true;
    let filteredArray=[];
    while(i){
        choice=Number(prompt("¿Deseas buscar productos por nombre o precio?\n1. Nombre.\n2. Precio."));
        switch (choice) {
            case 1:
                i=false;
                choice=prompt("Buscar productos por palabra:");
                array.forEach(element => {
                    if(element.name.includes(choice)){
                        filteredArray.push(element);
                    }
                });
                break;
            case 2:
                i=false;
                let j=true;
                let k=true;
                while(j){
                    while (k){
                        minSearch=Number(prompt("¿Cúal es el valor mínimo para buscar por precio?"));
                        if(isNaN(minSearch)||(minSearch=="")){
                            alert("Introduce un valor válido.")
                        }else{
                            k=false;
                        }
                    }
                    k=true;
                    while(k){
                        maxSearch=Number(prompt("¿Cúal es el valor máximo para buscar por precio?"));
                        if(isNaN(maxSearch)||(maxSearch=="")){
                            alert("Introduce un valor válido.")
                        }else{
                            k=false;
                        }
                    }
                    k=true;
                    if(minSearch>maxSearch){
                        alert("Introduce valores válidos, el mínimo debe ser menor que el máximo")
                    }else{
                        j=false;
                        filteredArray= array.filter((element) => element.price >= minSearch);
                        filteredArray= filteredArray.filter((element) => element.price <= maxSearch);
                    }
                }
                
                break;
            default:
                alert("Selecciona una opción válida");
                break;
        }
        
    }
    alert(showProducts(filteredArray));
}

//5
const modifyProduct=function(array){
    let i=true;
    let productSelect={};
    let flag=false;
    if(array.length==0){
        alert("Aún no hay productos para modificar.")
        return
    }
    while(i){
        choice=Number(prompt("¿Que id de producto quieres duplicar?:\n"+showProducts(array)));
        array.forEach(element => {
            if(element.id==choice){
                flag=true;
                productSelect=element;
                let j=true;
                while(j){
                    choice=Number(prompt("¿Que deseas modificar del producto?\n1. Nombre.\n2. Precio.\n3. Cantidad.\n4. Descripción.\n5. Cancelar."));
                    switch (choice) {
                        case 1:
                            let k=true;
                            while(k){
                                choice=prompt("¿Cuál es el nuevo nombre?");
                                if(choice==""){
                                    alert("Introduce un nombre válido.");
                                }else{
                                    element.name=choice;
                                    alert("Nombre actualizado satisfactoriamente.");
                                    k=false;
                                }
                            }
                            break;
                        case 2:
                            let l=true;
                            while(l){
                                choice=Number(prompt("¿Cuál es el nuevo precio?"));
                                if((isNaN(choice))||(choice=="")){
                                    alert("Introduce un precio válido.");
                                }else{
                                    element.price=choice;
                                    alert("Precio actualizado satisfactoriamente.");
                                    l=false;
                                }
                            }
                            break;
                        case 3:
                            let m=true;
                            while(m){
                                choice=Number(prompt("¿Cuál es la nuevo cantidad?"));
                                if((isNaN(choice))||(choice=="")){
                                    alert("Introduce una cantidad válida.");
                                }else{
                                    element.stock=choice;
                                    alert("Cantidad actualizada satisfactoriamente.");
                                    m=false;
                                }
                            }
                            break;
                        case 4:
                            choice=prompt("¿Cuál es la nueva descripción?");
                            element.description=choice;
                            alert("Descripción actualizada satisfactoriamente.");
                            break;
                        case 5:
                            j=false;
                            break;
                        default:
                            alert("Introduce una opción válida.");
                            break;
                    }
                }
            }
        });
        if(flag==true){
            i=false;
            break;
        }else{
        alert("Introduce un evento de la lista.")
        }
    }
}

//6
const deleteProducts=function(array){
    let i=true;
    let flag=false;
    if(array.length==0){
        alert("Aún no hay productos para eliminar.")
        return
    }
    while(i){
        choice=Number(prompt("¿Que id de producto quieres eliminar?\n"+showProducts(array)));
        for (let i = 0; i < array.length; i++) {
            if(array[i].id==choice){
                flag=true;
                array.splice(array[i]-1,1);
                alert("Producto eliminado satisfactoriamente");
            }  
        }
        if(flag==true){
            j=false;
            break;
        }else{
        alert("Introduce un producto de la lista")
        }
    }
}

//7
const sellProduct=function(array){
    let i=true;
    let flag=false;
    let quantity=0;
    let sell=0;
    if(array.length==0){
        alert("Aún no hay productos para vender.")
        return
    }
    while(i){
        choice=Number(prompt("¿Que id de producto quieres vender?\n"+showProducts(array)));
        for (let i = 0; i < array.length; i++) {
            if(array[i].id==choice){
                flag=true;
                let j=true;
                while(j){
                    quantity=Number(prompt(`¿Cuantas unidades de ${array[i].name} quieres vender?`));
                    if((isNaN(quantity))||quantity==""){
                        alert("Introduce un valor válido.");
                    }else{
                        if(quantity>array[i].stock){
                            alert(`No puedes vender ${quantity} unidades por que sólo hay ${array[i].stock} unidades del producto en stock.`);
                        }else{
                            array[i].stock-=quantity;
                            sell=quantity*array[i].price;
                            alert(`Venta realizada satisfactoriamente, se vendió  $${sell}`)
                        }
                        j=false;
                    }
                }
            }  
        }
        if(flag==true){
            j=false;
            break;
        }else{
        alert("Introduce un producto de la lista")
        }
    }
}

//8
const purchaseProduct=function(array){
    let i=true;
    let flag=false;
    let quantity=0;
    let purchase=0;
    if(array.length==0){
        alert("Aún no hay productos para comprar.")
        return
    }
    while(i){
        choice=Number(prompt("¿Que id de producto quieres comprar?\n"+showProducts(array)));
        for (let i = 0; i < array.length; i++) {
            if(array[i].id==choice){
                flag=true;
                let j=true;
                while(j){
                    quantity=Number(prompt(`¿Cuantas unidades de ${array[i].name} quieres comprar?`));
                    if((isNaN(quantity))||quantity==""){
                        alert("Introduce un valor válido.");
                    }else{
                        array[i].stock+=quantity;
                        console.log(typeof(array[i].stock));
                        console.log(typeof(quantity));
                        purchase=quantity*array[i].price;
                        alert(`Compra realizada satisfactoriamente, se gastó  $${purchase}`);
                        j=false;
                    }
                }
            }  
        }
        if(flag==true){
            j=false;
            break;
        }else{
        alert("Introduce un producto de la lista")
        }
    }
}

//9. Reporte general de productos.
    //9.1. Cantidad total de productos.
    //9.2. Cálcular el valor total del inventario (todos los productos(price*stock)).
    //9.3. Top 3 productos más baratos.
    //9.4. Top 3 productos más caros.
    //9.5. Top 3 productos con menor stock.
    //9.6. Top 3 productos con más stock.
    //9.7. Cantidad de productos con malas palabras en la descripción.
    //9.8. Mostrar los productos sin censurar las malas palabras.

const report=function(array){
    let message="---Reporte General---\n";
    //9.1
    const totalStock=function(array){
        let totalProducts=array.length;
        let totalStock=0;
        array.forEach(element => {
            totalStock+=element.stock;
        });
        message+=`- Dentro del inventario hay un total de ${totalProducts} productos, con un stock total de ${totalStock} unidades.\n`;
    }
    //9.2
    const totalPrice=function(array){
        let totalPrice=0;
        array.forEach(element => {
            totalPrice+=(element.price*element.stock);
        });
        message+=`- El inventario tiene un valor total de $${totalPrice}.\n`
    }
    //9.3
    const cheapestProducts=function(array){
        let sortedArray=[];
        message+="- Top 3 productos más baratos.\n"
        sortedArray= array.sort((p1, p2) => (p1.price > p2.price) ? 1 : (p1.price < p2.price) ? -1 : 0);
        for (let i = 0; i < 3; i++) {
            message+=`  - ${array[i].name}(Precio: ${array[i].price}).\n`
        }
    }
    //9.4
    const expensivestProducts=function(array){
        let sortedArray=[];
        message+="- Top 3 productos más caros.\n"
        sortedArray= array.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
        for (let i = 0; i < 3; i++) {
            message+=`  - ${array[i].name}(Precio: ${array[i].price}).\n`
        }
    }
    //9.5
    const lessStockProducts=function(array){
        let sortedArray=[];
        message+="- Top 3 productos con menos cantidad de unidades.\n"
        sortedArray= array.sort((p1, p2) => (p1.stock > p2.stock) ? 1 : (p1.stock < p2.stock) ? -1 : 0);
        for (let i = 0; i < 3; i++) {
            message+=`  - ${array[i].name}(Unidades en stock: ${array[i].stock}).\n`
        }
    }
    //9.6
    const moreStockProducts=function(array){
        let sortedArray=[];
        message+="- Top 3 productos con más cantidad de unidades.\n"
        sortedArray= array.sort((p1, p2) => (p1.stock < p2.stock) ? 1 : (p1.stock > p2.stock) ? -1 : 0);
        for (let i = 0; i < 3; i++) {
            message+=`  - ${array[i].name}(Unidades en stock: ${array[i].stock}).\n`
        }
    }
    //9.7. Cantidad de productos con malas palabras en la descripción.
    const badWordsCount=function(array){
        const badWords=["palabra1","palabra2","palabra3","palabra4","palabra5"];
        let flag=false;
        let censuredCount=0;
        array.forEach(element => {
            for (let i = 0; i < badWords.length; i++) {
                if(element.description.includes(badWords[i])){
                    flag=true;
                }
            }
            if(flag==true){
                censuredCount++;
            }
            flag=false;
        });
        message+=`- Hay un total de ${censuredCount} productos con malas palabras en su descripción\n`
    }
    //9.8.
    const showWithoutCensure=function(array){
        message+="- Lista de todos los productos.\n"
        array.forEach(element => {
            message+=`  -${element.id}) ${element.name}.\n  - Precio: ${element.price}.\n  - Cantidad: ${element.stock}.'\n  - Descripción: ${element.description}.\n`
        });
    }
    totalStock(array);
    totalPrice(array);
    cheapestProducts(array);
    expensivestProducts(array);
    lessStockProducts(array);
    moreStockProducts(array);
    badWordsCount(array);
    showWithoutCensure(array);
    return message;
}



alert("Bienvenido a tu gestor de inventario");
while(i){
    choice=Number(prompt("1. Crear producto.\n2. Duplicar producto.\n3. Ver productos.\n4. Buscar productos.\n5. Modificar productos.\n6. Eliminar productos.\n7. Vender productos.\n8. Comprar productos.\n9. Generar reporte general.\n10. Salir"));    
    switch(choice){
        case 1:
            createProduct();
            id++;
            break;
        case 2:
            duplicateProducts(inventory);
            id++;
            break;
        case 3:
            alert(showProducts(inventory));
            break;
        case 4:
            searchProducts(inventory);
            break;
        case 5:
            modifyProduct(inventory);
            break;
        case 6:
            deleteProducts(inventory);
            break;
        case 7:
            sellProduct(inventory);
            break;
        case 8:
            purchaseProduct(inventory);
            break;
        case 9:
            alert(report(inventory));
            console.log(report(inventory));
            break;
        case 10:
            i=false;
            break;
        default:
            alert("Introduce una elección válida");
            break;
        }
    
        
    
}
alert("Gracias, hasta pronto");
