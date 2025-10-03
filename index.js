import Usuario from "./clases/usuario.js";

const usuarioPrueba = Usuario.crear("Alex", "alex@email.com", 25);

console.log(usuarioPrueba);

console.log("Intento 1:", usuarioPrueba.cambiarPin("0000", "5678")); // false
console.log("Intento 2:", usuarioPrueba.cambiarPin("1234", "5678")); // true
