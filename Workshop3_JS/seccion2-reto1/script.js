let gradesString=prompt("Ingrese las calificaciones de los estudiantes separadas por ,");
let gradesArray=gradesString.split(",");
let total=0;
let average=0;
let filteredArray=[];

for (let i = 0; i < gradesArray.length; i++) {
    gradesArray[i]=Number(gradesArray[i]);
}

filteredArray=gradesArray.filter(num => !isNaN(num));

total=filteredArray.reduce((total, element) => {
    return total + element;
}, 0);
average=total/filteredArray.length
console.log(filteredArray);
console.log(total);
alert("El promedio de las notas es "+average);