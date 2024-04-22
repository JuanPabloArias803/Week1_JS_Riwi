const employees=[];
let firstName="";
let lastName="";
let userName="";
let email="";

const validateUserName = function(user_name) {
    let count=1;
    let originalName=user_name;
    employees.forEach(element => {
        if(element.userName==user_name){
            user_name=originalName+String(count);
            count++;
            validateUserName(user_name);
        }
    });
    return user_name;
};


while(true){
    if(confirm("¿Desea agregar un nuevo usuario?")){
        firstName=prompt("¿Cuál es tu nombre?").toLowerCase();
        lastName=prompt("¿Cuál es tu apellido?").toLowerCase();
        userName=firstName.slice(0,3)+lastName.slice(0,3);
        userName=validateUserName(userName);
        email=userName+"@myDomain.com";
        employees.push({firstName,lastName,userName,email});
        console.log(employees);
    }else{
        break;
    }
}
console.log(employees)  