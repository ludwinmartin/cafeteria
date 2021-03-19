//Importación de dependencias
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importación de rutas
const customerRoutes = require('./routes/customers');

// Configuraciones del servidor
app.set('port', process.env.PORT || 4500);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares: funciones que se ejecutan antes de las peticiones de los usuarios
// COnfiguración de parametros de la base de datos
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'proyectocafeteria'
}, 'single'))

//Nuevo Middleware
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/', customerRoutes);

//Configuración para archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Inicio del servidor
app.listen(app.get('port'), () => {
    console.log('Server on port 4500');
});

//npm run dev = Es el comando para iniciar el servidor y correrlo con nodemon