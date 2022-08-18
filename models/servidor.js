// se crea el web server 
const express = require('express')
// se importa cros
const cors = require('cors');

class Server{

    //se ejecuta al llamar la clase Server
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT
        this.userpath = '/api/usuarios';

        //middlewares funciones que se ejecutan al iniciar el servidor
        this.middlewares(); 
        // rutas de la app
        this.routes();

        //
    }

    //funsion que se ejecuta el iniciar el servidor
    //directorio publico (carpeta public )
    middlewares(){

        // cors
        this.app.use(cors());

        // lectura del body
        //se recibe la informacion que se envio en el post o put o delete
        // es mas facil trabajar con json en js 
        this.app.use(express.json());



        // directorio public 
        this.app.use(express.static('public'));
        

    }

    
    routes(){
        // se indica el path    y se requiere el archivo user 
        this.app.use(this.userpath, require('../routes/usuarios'))
        
    }

    listen_port(){
        // CONFOGURACION DEL PUERTO DEL SERVIDOR
        this.app.listen(this.puerto,()=>{
        console.log('servidor corriendo en el puerto', this.puerto);
    });
    }
}

module.exports = Server;