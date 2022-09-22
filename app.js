// RESTSERVER SERVIR CONTENIDO ESTATICO 
// REGRESAR INFORMACION POR JSON Y SE CREAN EMPOIN CRUD


//INSTALACIONES PAQUETES
// npm i express (para crear el express server )
// npm i dotenv ( para configurar varible de entorno)
// npm i cors (para proteger quien ingresa  nuestra pagina )
// npm i mongoose (para DB evita inyeciones es mejor manejo en l DB)
// npm i bcryptjs (para encriptar contraseña)
// npm i express-validator(valida que el correo o campos sea valido)
require('dotenv').config();
const Server = require('./models/servidor');

// se instacia clase Server
const server = new Server();

//se llama el metodo de la instancia server
server.listen_port(); 














