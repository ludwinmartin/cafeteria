const express = require('express');
const router = express.Router();

const customerController= require('../controllers/customerController');

//Rutas para la tabla de categoria
router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:idCategoria', customerController.delete);
router.get('/update/:idCategoria', customerController.edit);
router.post('/update/:idCategoria', customerController.update);

//Rutas para la tabla de producto
router.get('/productos', customerController.listProductos);
router.post('/productos/addProductos', customerController.saveProductos);
router.get('/productos/deleteProductos/:idProducto', customerController.deleteProductos);
router.get('/productos/updateProductos/:idProducto', customerController.editProductos);
router.post('/productos/updateProductos/:idProducto', customerController.updateProductos);

//Rutas para la tabla de rol
router.get('/roles', customerController.listRoles);
router.post('/roles/addRoles', customerController.saveRoles);
router.get('/roles/deleteRoles/:idRol', customerController.deleteRoles);
router.get('/roles/updateRoles/:idRol', customerController.editRoles);
router.post('/roles/updateRoles/:idRol', customerController.updateRoles);

//Rutas para la tabla de usuario
router.get('/usuarios', customerController.listUsuarios);
router.post('/usuarios/addUsuarios', customerController.saveUsuarios);
router.get('/usuarios/deleteUsuarios/:idUsuario', customerController.deleteUsuarios);
router.get('/usuarios/updateUsuarios/:idUsuario', customerController.editUsuarios);
router.post('/usuarios/updateUsuarios/:idUsuario', customerController.updateUsuarios);
//-----------------------------------------------

module.exports = router;