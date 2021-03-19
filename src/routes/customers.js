const express = require('express');
const router = express.Router();

const customerController= require('../controllers/customerController');

//Rutas para la tabla de categoria
router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:idCategoria', customerController.delete);
router.get('/update/:idCategoria', customerController.edit);
router.post('/update/:idCategoria', customerController.update);

//Rutas para la tabla de productos
router.get('/productos', customerController.listProductos);
router.post('/productos/addProductos', customerController.saveProductos);
//router.get('/students/delete/:idAlumno', customerController.deletestudent);
//router.get('/students/updatestudent/:idAlumno', customerController.estudent);
//router.post('/students/updatestudent/:idAlumno', customerController.ustudent);
//-----------------------------------------------

module.exports = router;