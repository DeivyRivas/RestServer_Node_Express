//se estrae de mongoose dos objetos
//Schema y model = info en la base datos
const {Schema, model} = require('mongoose');

// se establece un objeto o coleccion con lo campos a guardar en la base de datos
const UsuarioSchema = Schema({
    //como quiero que guarde el nombre
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio']

    },
    apellido: {
        type: String,
        required: [true, 'el apellido es obligatorio']

    },
    edad: {
        type: String,
        required: [true, 'la edad es obligatorio']

    },
    correo: {
        type: String,
        required: [true, 'el correo es obligatorio'],
        unique: true
    },
    contraseña: {
        type: String,
        required: [true, 'la contraseña es obligatorio']
    },
    img: {
        type: String,
       
    },
    rol: {
        type: String,
        required:true,
        emun:['ADMIN_ROL', 'USER_ROL']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

// se crea fincio para ocultar la contraseña y la version 
UsuarioSchema.methods.toJSON = function(){
    const {__v, contraseña, ...usuario } = this.toObject();
    return usuario;
}


//se exporta model mandando Usuario ya que mongoose lo pone por defecto ese nombre a la coleccion o tabla

module.exports= model('Usuario',UsuarioSchema);