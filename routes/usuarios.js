
// se configura la funsion Router del paquete express
const { Router } = require('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosDelete } = require('../controllers/usuarios-controllers');

// se crea instancia 
const router = Router();

  //peticion get
  // se llama la funsion del controlador
  router.get('/', usuariosGet );

  //peticion put
  // se pone id para identificar el id del registro a actualizar
  router.put('/:id', usuariosPut);

  //peticion post crear o insertar
  router.post('/',usuariosPost);

  //peticion delete o eliminar 
  router.delete('/', usuariosDelete);










module.exports = router;