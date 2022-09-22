// crear funsione y exportarlas

// se desestructura de exprese Response y Required

const { response, request } = require('express');

//se importa paquete para encriptar contraseña
const bcryptjs = require('bcryptjs');

//se importa el modelo Usuario
const Usuario = require('../models/usuario');
const Roles = require('../models/roles');



//OBTENER DATOS O INFO DE LOS USURIOS DESDE LA BASE DE DATOS
const usuariosGet = async(req = request, res = response) =>{
    // ejemplo del path ?q=hola&nombre=deyvi&apikey=98364036483
    // const request = req.params;

    //se estrae usuario del model Usuario de la DB
    // y se PAGINAN POR SI SON MUCHOS EN LA BASE
    const { limite = 5, desde= 0 } = req.query;
    const query = {estado : true}

                     // promesa   
    // const usuarios = await Usuario.find(query)
    //     .skip(  Number(desde))
    //     .limit( Number(limite));//LIMITE 
    //                     // promesa
    // const total = await Usuario.countDocuments(query);//cuenta la cantidad de registros

    // const roles = await Roles.find();

    // ejecuta promesa al mismo de manera simultanea
    // se desestrutura en un arregle [] en la primera posicion se manda en el total y en la segunda los usuarios
    const [total, usuarios] = await Promise.all([

        Usuario.countDocuments(query),

        Usuario.find(query)
            .skip(  Number(desde))  
            .limit( Number(limite))
    ])

    //se puede desestructurar ASI 
    //const body = req.query;
    // OTRA MANERA
    //const query = req.query; 

    res.json({
        total,
        usuarios
    });
}





// ACTUALIZAR 
const usuariosPut = async (req , res = response ) =>{

    // en los parametros pasarle a id el valor del id en el path
    // tambien se puede desestructurar
    //const { id } = req.params;
    const id = req.params.id;
    
    //se estrae lo que no necesito grabar
    //en la actualizacion se estrae el _id si es que viene
    const {_id, contraseña, google, ...resto} = req.body;

    //validar contra base de datos
    if(contraseña){
        // encripttar la contraseña
        const  salt = bcryptjs.genSaltSync();//nivel de encriptar defailt 10  
        resto.contraseña = bcryptjs.hashSync(contraseña, salt)//se encripta la contraseña, se envia la contra y el nivel de encriptacion
    }
    //se actualiza el registro
    const usuario = await Usuario.findByIdAndUpdate( id, resto);
    
    //respuesta a mostrar en postman
    res.json(usuario);
}





// enviar info de un form o body
const usuariosPost = async (req, res= response ) =>{   
    const {nombre, apellido, edad, correo, contraseña, rol } = req.body; // se saca los datos a mostrar 
     
    //se crea instancia del modelo importado
    // como argun se envian los campos a guardar
    const usuario = new Usuario({nombre, apellido, edad, correo, contraseña, rol});

    // encripttar la contraseña
    const  salt = bcryptjs.genSaltSync();//nivel de encriptar defailt 10  
    usuario.contraseña = bcryptjs.hashSync(contraseña, salt)//se encripta la contraseña, se envia la contra y el nivel de encriptacion

    //guardar los datos en la DB
    await usuario.save();
    res.json({
        usuario
    });
}






const usuariosPatch = (req, res= response ) =>{
    res.json({
        msg: 'peticion patch api - desde el controlador'
    });
}






const usuariosDelete = async(req, res= response ) =>{
    const { id } = req.params;

    //eliminado fisicamente
    const usuario = await Usuario.findByIdAndDelete(id);

    //eliminado de cambiar el estado del usuario a false
   // const usuario = await Usuario.findByIdAndUpdate(id, {estado: false})


    res.json({
        msg:"usuario eliminado",
        usuario
    });
}






module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete

}