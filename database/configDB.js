// se importa paquete de mongoose
const mongoose = require('mongoose');
require('colors');


const dbConnection = async() =>{

    try {
        // SE REALIZA LA CONECCION
        
        mongoose.connect(process.env.MONGODB_CONECT)
        console.log(`Base datos en Linea OK `.bgGreen );
        
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la Base de Datos');
    }

}

module.exports={
    dbConnection
}



