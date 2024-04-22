let atRegex=/@/;
let pointRegex=/@.+\./;
let spaceRegex=/\s/;

const email=prompt("Ingrese su correo electrónico:");
if((atRegex.test(email))&&(pointRegex.test(email))&&(!((spaceRegex.test(email))))){
    alert("Correo válido");
}