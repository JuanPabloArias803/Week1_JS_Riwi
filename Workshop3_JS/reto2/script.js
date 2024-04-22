let numRegex = /\d+/;
let letterRegex=/[A-Za-z]/;
let characterRegex=/[\! \@ \# \$ \% \^ \& \* \( \) \+ \= \_ \- \{ \} \[ \] \: \; \" \' \? \< \> \, \. \| \/ \\ \~ \`]/;
const password=prompt("Ingrese contraseña:");
if((password.length>=8)&&(numRegex.test(password))&&(letterRegex.test(password))&&(characterRegex.test(password))){
    alert("Contraseña segura");
}else{
    alert("Contraseña inválida");
}
