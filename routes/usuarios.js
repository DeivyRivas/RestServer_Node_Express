
// se configura la funsion Router del paquete express
const { Router } = require('express');
const { check } = require('express-validator');
const {esRolValido,correoExiste, existeUsuarioPorID } = require('../helpers/db-validador')
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosDelete } = require('../controllers/usuarios');
const { validacampos } = require('../middleware/validar-campos');

// se crea instancia 
const router = Router();

  //peticion get
  // se llama la funsion del controlador
  router.get('/user', usuariosGet );

  //peticion put
  // se pone id para identificar el id del registro a actualizar
  //se establecen milderwares 
  router.put('/:id',[
    check('id', 'No es un ID valido de MongoDB').isMongoId(),//verifica si el id es de mongo 
    check('id').custom(existeUsuarioPorID), //ejecuta la validacion de si existe el id en la base de datos
    check('rol').custom(esRolValido), // verifica que el rol sea valido
    validacampos
  ], usuariosPut);


  //peticion post crear o insertar
  // en el segundo arg se manda los midelwares
  //validacion de correo o campos a validar antes de ir a la ruta
  router.post('/',[
    check('nombre', 'el nombre no es valido').not().isEmpty(),
    check('contraseña', 'contraseña debe ser mas de 6 caracteres').isLength({min: 6}),
    check('correo', 'el correo no es valido').isEmail(),
    check('correo').custom(correoExiste),
    
    //recibe como argumento el valor que evalua en el body
    check('rol').custom(esRolValido),
    validacampos
  ],usuariosPost );

  //peticion delete o eliminar 
  router.delete('/:id',[
    check('id', 'No es un ID valido de MongoDB').isMongoId(),//verifica si el id es de mongo 
    check('id').custom(existeUsuarioPorID), //ejecuta la validacion de si existe el id en la base de datos
    validacampos
  ] ,usuariosDelete);










module.exports = router;