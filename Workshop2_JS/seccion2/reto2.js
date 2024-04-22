let dailyBudget=0;
let food=0;
let books=0;
let dailySaves=0;
let goalBudget=0;
let spare=0;
let decisition=0;
const optionsArr=[];


while(true){
    dailyBudget=Number(prompt("¿Cuál es tu presupuesto para hoy?"));
    if((isNaN(dailyBudget))||(dailyBudget<1)||(dailyBudget==null)){
        alert("Introduce un número válido");
    }else{
        break;
    }
}

while(true){
    dailySaves=Number(prompt("¿Cuánto dinero deseas ahorrar el día de hoy?"));
    if((isNaN(dailySaves))||(dailySaves<0)||(dailySaves==null)){
        alert("Introduce un número válido");
    }else{
        break;
    }
}

goalBudget=dailyBudget-dailySaves

if(goalBudget<0){
    alert("Tu presupuesto no te alcanza para ahorrar lo que deseas");
}else{
    alert("Se cumple tu prioridad de ahorrar "+dailySaves)
    
    while(true){
        food=Number(prompt("¿Cuánto deseas gastar en comida hoy?"));
        if((isNaN(food))||(food<1)||(food==null)){
            alert("Introduce un número válido");
        }else{
            break;
        }
    }

    while(true){
        books=Number(prompt("¿Cuánto deseas gastar en libros hoy?"));
        if((isNaN(books))||(books<0)||(books==null)){
            alert("Introduce un número válido");
        }else{
            break;
        }
    }

    if ((food+books)<=goalBudget){
        optionsArr.push("comer afuera");
        optionsArr.push("comprar los libros");
        spare=goalBudget-food-books;
        optionsArr.forEach((item) => {
            alert("Puedes "+item);
        });
        alert("Te sobran "+spare);
    }else{
        if ((food<goalBudget)&&(books<goalBudget)){
            while(true){
                decisition=Number(prompt("Te alcanza para una sola opción:\n1. Comer afuera\n2. Comprar los libros"));
                if((isNaN(decisition))||(decisition<1)||(decisition>2)||(decisition==null)){
                    alert("Introduce un número válido");
                }else{
                    break;
                }
            }
            if (decisition===1){
                optionsArr.push("comer afuera");
                spare=goalBudget-food;
                optionsArr.forEach((item) => {
                    alert("Puedes "+item);
                });
                alert("Te sobran "+spare);
            }else{
                optionsArr.push("comprar los libros")
                spare=goalBudget-books;
                optionsArr.forEach((item) => {
                    alert("Puedes "+item);
                });
                alert("Te sobran "+spare);
            }
        }else{
            if (food<goalBudget){
                optionsArr.push("comer afuera");
                spare=goalBudget-food;
                optionsArr.forEach((item) => {
                    alert("Puedes "+item);
                });
                alert("Te sobran "+spare);
            }
            if (books<goalBudget){
                optionsArr.push("comprar los libros")
                spare=goalBudget-books;
                optionsArr.forEach((item) => {
                    alert("Puedes "+item);
                });
                alert("Te sobran "+spare);
            }
            if ((food>goalBudget) && (books>goalBudget)){
                alert("No te alcanza para ningun gasto adicional, unicamente el ahorro deseado");
            }
    }
    }
}

