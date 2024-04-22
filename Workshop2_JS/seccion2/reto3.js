const objetos=[
{
    name:'camera',
    weather: 'any',
    weight:200,
    volume: 5,
    priority: 0
}
,
{
    name:'umbrella',
    weather: 'winter',
    weight:500,
    volume: 10,
    priority:1
}
,
{
    name:'sunblock',
    weather: 'summer',
    weight:50,
    volume: 1,
    priority:1
}
,
{
    name:'sandals',
    weather: 'summer',
    weight:100,
    volume: 5,
    priority: 0
}
,
{
    name:'jacket',
    weather: 'winter',
    weight:700,
    volume: 20,
    priority:1
}
,
{
    name:'snacks',
    weather: 'any',
    weight:130,
    volume: 3,
    priority:0
}
];

let goodWeather=false;
let availableSpace=0;
let currentWeight=0;
let maxWeight=0;
let availableWeight=0;
const weatherItems=[];
const availableItems=[];
const maxLoad=[];

goodWeather=confirm("¿El destino del viaje está en verano?");

while(true){
    availableSpace=Number(prompt("Cuál es tu espacio en cm3 disponible en la maleta?"));
    if((isNaN(availableSpace))||(availableSpace<1)||(availableSpace==null)){
        alert("Introduce un número válido");
    }else{
        break;
    }
}

while(true){
    maxWeight=Number(prompt("Cuál es el peso máximo en gramos que puede tener la maleta?"));
    if((isNaN(maxWeight))||(maxWeight<0)||(maxWeight==null)){
        alert("Introduce un número válido");
    }else{
        break;
    }
}

while(true){
    currentWeight=Number(prompt("Cuál es el peso actual en gramos que puede tener la maleta?"));
    if((isNaN(currentWeight))||(currentWeight<0)||(currentWeight==null)){
        alert("Introduce un número válido");
    }else{
        break;
    }
}

availableWeight=maxWeight-currentWeight;

if(availableWeight<0){
    alert("Error");
}else{
    if(goodWeather){
        objetos.forEach(element => {
            if((element.weather==='summer')||(element.weather==='any')){
                weatherItems.push(element)
            }
        });
    }else{
        objetos.forEach(element => {
            if((element.weather==='winter')||(element.weather==='any')){
                weatherItems.push(element);
            }
        });
    }

    weatherItems.forEach(element => {
        if((element.volume<=availableSpace)&&(element.weight<=availableWeight)){
            availableItems.push(element);
        }
    });

    if(availableItems.length==0){
        alert("No puedes llevar ningun artículo")
    }else{
        availableItems.sort((a, b) => b.priority - a.priority);
        for (let i = 0; i < availableItems.length; i++) {
            if((currentWeight+availableItems[i].weight)<maxWeight){
                maxLoad.push(availableItems[i]);
                currentWeight=currentWeight+availableItems[i].weight;
            }else{
                continue
            }
        }
        maxLoad.forEach(element => {
            alert("Puedes llevar "+element.name);
        });
    }
}
