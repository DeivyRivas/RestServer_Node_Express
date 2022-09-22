//leer Roles en la base de datos


const {Schema, model} = require('mongoose');
//Schema= info en la base datos
//se crea objeto de Schema
const RolSchema = Schema({
    //se pone el campo y se establecen el typado de datos
    rol:{
        type: String,
        required: [true, 'el rol es obligatorio']
    }
});




module.exports=model('Roles', RolSchema)


