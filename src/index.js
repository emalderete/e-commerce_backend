import express from "express";

// Crear una instancia de Express
const app = express();

// Con esta variable y la función set(variable, valor); podemos definir un puerto en el cual el backend se quedará escuchando
// para comprobar lo que sucede.
// Se puede acceder al archivo de enviroment donde se almacenará el valor del puerto a utilizar o darle la opción de forzar el uso
// de un puerto nuevo.
app.set('port', process.env.PORT || 4000);

console.log('desde el backend');