let gradesString=prompt("Ingrese las calificaciones de los estudiantes separadas por ,");
let gradesArray=gradesString.split(",");
let total=0;
let average=0;
let filteredArray=[];

for (let i = 0; i < gradesArray.length; i++) {
    if(isNan(gradesArray[i])){
        alert(gradesArray[i]+" no es una nota válida")
    }
    gradesArray[i]=Number(gradesArray[i]);
}


filteredArray=gradesArray.filter(num => !isNaN(num));

filteredArray.forEach(element => {
    let message="Las notas válidas son:\n";
    message+=element
});

total=filteredArray.reduce((total, element) => {
    return total + element;
}, 0);
average=total/filteredArray.length
console.log(filteredArray);
console.log(total);
alert("El promedio de las notas es "+average);