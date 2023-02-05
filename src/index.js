import express from "express";

// Crear una instancia de Express
const app = express();

// Con esta variable y la función set(variable, valor); podemos definir un puerto en el cual el backend se quedará escuchando
// para comprobar lo que sucede.
// Se puede acceder al archivo de enviroment donde se almacenará el valor del puerto a utilizar o darle la opción de forzar el uso
// de un puerto nuevo.
app.set('port', process.env.PORT || 4000);

// Mediante el uso de la función listen(valor_a_escuchar, () => {Lo que hará cuando ocurra lo escuchado})
// vamos a escuchar el puerto definido anteriormente con la palabra 'port', a su vez nos valdremos de la función
// get(valor_a_obtener) para consultar el puerto en cuestión.
app.listen(app.get('port'), () => {console.log('Estoy en el puerto ' + app.get('port'))});