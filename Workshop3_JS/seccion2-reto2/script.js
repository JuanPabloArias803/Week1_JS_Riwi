const gradesArray=[];
let i=true;
let choice=true;
while(choice){
    choice=confirm("¿Deseas agregar una nota?");
    if(choice){
        let grade=prompt("¿Cuál es la nota?");
        if(!isNaN(Number(grade))&&grade!=""){
            gradesArray.push(Number(grade));
            alert("Nota guardada con éxito.")
        }else{
            alert(`No es una nota válida.`);
        }
    }
}
let sum = gradesArray.reduce((previous, current) => current += previous);
let avg = sum / gradesArray.length;
let max=Math.max(...gradesArray);
let min=Math.min(...gradesArray);
let passArray= gradesArray.filter((element) => element >= 70);
let failArray= gradesArray.filter((element) => element < 70);
let sortArray=gradesArray.sort((a, b) => a - b );
let sortList=sortArray.join(", ");
alert(`El promedio de notas es: ${avg}`);
alert(`La nota máxima es: ${max}`);
alert(`La nota minima es: ${min}`);
alert(`Hubieron ${passArray.length} aprobados.`);
alert(`Hubieron ${failArray.length} reprobados.`);
alert(`Las notas ordenadas son:\n${sortList}`);