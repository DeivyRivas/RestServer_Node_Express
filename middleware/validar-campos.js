const { validationResult } = require('express-validator');

//si la validacion de campos pasa se manda el tercerarg NEXT
const validacampos=(req, res, next)=>{

    //controla el error en la validacion de los campos
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    //sigue con el siaguiente middleware o el controlador
    next();
}

module.exports={
    validacampos
}