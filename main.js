// 1) Generar dos variables: usuarioConEmail y contrasenia. Asignarle un valor aleatorio. A través de tres prompts, pídale al usuario los siguientes datos.

/////////// PARA EL CASO LOGIN



// a) A través de 3 prompts, pídale al usuario que ingrese su nombre, usuario y su contraseña. Valide que el usuario y la contraseña coincidan con los datos de las variables, estos datos tienen que ser iguales entre sí. En el caso de que no lo sean, devuelva un mensaje en forma de alerta, para cada uno de los casos: "Su usuario es erróneo" o "Su contraseña es errónea". EN EL CASO DE QUE SE EQUIVOQQUE EN LOS DOS: "SU USUARIO Y CONTRASEÑA SO ERRÓNEOS".

// b) Luego de que el usuario se loguee exitosamente, envíe una alerta que notifique "Bienvenido ${nombre}". La alerta debe saludar al usuario que se loguea.

// c) Valide con un bucle que el usuario tiene una arroba. En el caso que no la contenga, envíe un prompt con el siguiente mensaje: "Ingrese nuevo email". Cambie el valor de la variable usuarioConEmail.

// d) Valide si la contraseña del usuario tiene más de 8 caracteres. En el caso de que tenga más de ocho caracteres, no haga nada. De lo contrario, envíe un alerta con el siguiente mensaje: "Su contraseña es insegura."

function existenciaArroba(correo, arroba) {
    if (correo.length) {
        for (let i = 0; i < correo.length; i++) {
            if (correo[i] === arroba) {
                return true;
            }
        }

        return false;
    } else {
        return false;
    }
}
function validarEmailSaludo(correo, arroba, verdad) {
    if (existenciaArroba(UserEmail, caracter) === false) {
    do {
        alert(`Ingrese un email valido`);
        let UserEmail = prompt("ingrese su correo electronico");
        if (existenciaArroba(UserEmail, caracter) === Verdad) {
            boleano = true;
        }
    } while (boleano === false);
    }
    return alert(`Bienvenido ${name}`);
}
function cantCaracteres(contrasenia) {
    let accumulador=0;
        for (let i = 0; i < contrasenia.length; i++) {
           accumulador++;
           console.log(accumulador);
        }
        if (accumulador>=8){
        }else{
            alert(`su contraseña es insegura`);
        }
}

let UserEmail = prompt("ingrese su correo electronico")
let password = prompt("ingrese su contraseña");
let name = prompt("ingrese su nombre");
let boleano = false;
const caracter = `@`;
const Verdad = true;

validarEmailSaludo(UserEmail, caracter, Verdad);
cantCaracteres(password);
