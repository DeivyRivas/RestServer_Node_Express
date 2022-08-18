// crear funsione y exportarlas

// se desestructura de exprese Response y Required

const { response, request } = require('express');

const usuariosGet = (req = request, res = response) =>{
    // ejemplo del path ?q=hola&nombre=deyvi&apikey=98364036483
    // const request = req.params;

    //se puede desestructurar ASI 
    const {q, nombre, apikey, apellido,estado } = req.query;

    // OTRA MANERA
    //const query = req.query; 

    res.json({
        msg: 'peticion get api desde el controlador',
        q,
        nombre,
        apikey,
        apellido,
        estado
    });
}





// actualizar 
const usuariosPut = (req , res = response ) =>{

    // en los parametros pasarle a id el valor del id en el path
    // tambien se puede desestructurar
    // const { id } = req.params
    const id = req.params.id;

    res.json({
        msg: 'peticion put api - desde el controlador',
        id
    });
}





// enviar info de un form 
const usuariosPost = (req, res= response ) =>{
    //se establece variable para recibir la info en el request
    // que se envia en el post, put o delete
    // {
    //"nombre": "deivy",
    //"apellido": "Rivas",
    //"edad": 22   
    // }
    const {nombre, edad } = req.body; // se saca los datos a mostrar 

    res.json({
        msg: 'peticion post api - desde el controlador',
        nombre,
        edad
    });
}






const usuariosPatch = (req, res= response ) =>{
    res.json({
        msg: 'peticion patch api - desde el controlador'
    });
}






const usuariosDelete = (req, res= response ) =>{
    res.json({
        msg: 'peticion delete api - desde el controlador'
    });
}






module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete

}