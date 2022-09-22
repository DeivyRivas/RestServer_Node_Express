const Rol = require('../models/roles');
const Usuario = require('../models/usuario');


const esRolValido = async (rol= '') =>{
    //se crea instancia del modelo roles.js
const existeRol = await Rol.findOne({rol});//busca un objeto igual al ingresado
//si no existe el rol validacion chocara
    if(!existeRol){
        throw new Error(`el rol ${rol} no existe`);
    }
}

//validaciones personalizadas
const existeUsuarioPorID = async (id) =>{
    //verificar si el id existe
    //validar si ya existe el id  //busca el id ingresado  
    const existeUsuarioID = await Usuario.findById(id)
    // si no existe el id erroja el error 
    if(!existeUsuarioID){
        throw new Error(`El ID: ${id} no existe`)
    }
}


//validaciones personalizadas
const correoExiste = async (correo) =>{
    //verificar si el correo existe
    //validar si ya existe el correo  //busca un objeto igual al ingresado   
    const existeEmail = await Usuario.findOne({correo})
    if(existeEmail){
        throw new Error(`El correo: ${correo} ya esta registrado`)
    }
}


module.exports ={
    esRolValido,
    correoExiste,
    existeUsuarioPorID
}