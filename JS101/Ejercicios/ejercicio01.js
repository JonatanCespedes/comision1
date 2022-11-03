/*
Crear una funcion que reciba dos parametros: 'user' y 'password'. Usando SWITCH 
mostrar en consola los siguientes mensajes, según corresponda:
1.- "Bienvenido a nuestro sitio!", (si el usuario es "admin" y la contraseña es 1234)
2.- Contraseña incorrecta
3.- Usuario incorrecto
4.- Usuario y Contraseña incorrectos
5.- Debe ingresar los datos requeridos
*/

function identificacion(usuario, contraseña){
      switch(usuario, contraseña){
    
    case usuario === "admin" && contraseña === 1234:
        console.log("Bienvenido a nuestro sitio!");
        break;
    case usuario === "admin" && contraseña != 1234:
        console.log("Contraseña incorrecta");
        break;
    case usuario != "admin" && contraseña === 1234:
        console.log("Usuario incorrecto");
        break;
    case usuario != "admin" && contraseña != 1234:
        console.log("Usuario y contraseña incorrectos");
        break;
    default:
        console.log("Debe ingresar los datos requeridos");          

}
}
console.log(identificacion("admin", 1234))