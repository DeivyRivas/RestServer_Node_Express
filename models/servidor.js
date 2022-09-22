// se crea el web server 
const express = require('express')
// se importa cros
const cors = require('cors');
// se desestrustura 
const {  dbConnection } = require('../database/configDB')

class Server{

    //se ejecuta al llamar la clase Server
    constructor(){
        this.app = express();
        this.puerto = process.env.PORT
        this.userpath = '/api/usuarios';// es la ruta que sigue despues del link de heroku

        // llamamos la conexion de la Base de datos
        this.conectarDB();

        //middlewares funciones que se ejecutan al iniciar el servidor
        this.middlewares(); 
        // rutas de la app
        this.routes();

    }
    
    async conectarDB(){
        await dbConnection();
    }

    //funsion que se ejecuta antes de llamar un controlador o seguri con las ejecucion de las peticiones
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

// se realiza coneccion de mongo atlas (cluster y mongo compas)
// MONGODB_CONECT=mongodb+srv://user_node_app:4RzYiV75r6WV9Rmi@miclusterapp.ma0e1fd.mongodb.net/jugosDB
// luego se conecta con mongoose (evita inyecciones a la DB y es mas facil lo query)

module.exports = Server;