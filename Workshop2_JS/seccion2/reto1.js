const decisition=["Sal a correr","Trabaja en los proyectos","Toma el día libre"];
let energy=0;
let goodWeather=false;
let workLoad=0;

while(true){
    energy=Number(prompt("¿Del 1 al 100, cuál es tu nivel de energía el día de hoy?"));
    if((isNaN(energy))||(energy<1)||(energy>100)||(energy==null)){
        alert("Introduce un número válido");
    }else{
        break;
    }
}

while(true){
    workLoad=Number(prompt("¿Del 1 al 100, cúal es tu nivel carga laboral actual?"));
    if((isNaN(workLoad))||(workLoad<1)||(workLoad>100)||(workLoad==null)){
        alert("Introduce un número válido");
    }else{
        break;
    }
}

goodWeather=confirm("¿Está haciendo buen clima?")

if(energy<30){
    if (workLoad<50){
        console.log("El descanso es importante. "+decisition[2]);
    }else{
        console.log("Pese a que estas cansado, debes hacer un esfuerzo para bajar tu carga laboral. "+decisition[1]);
    }
}else{
    if(goodWeather){
        if(workLoad>=50){
            console.log("Aprovecha tu energía para adelantar tus responsabilidades. "+decisition[1])
        }else{
        console.log("Aprovecha tu energía y el buen clima. "+decisition[0]);
        }
    }else{
        console.log("Aprovecha tu energía ya que el clima no está bueno. "+decisition[1])
    }
}


