const controller = {};
//---------------------------------- Categoria
//Listar - Leer
controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM categoria', (err, inicio) =>{
            if (err){
                res.json(err);
            }
            res.render('inicio', {
                data: inicio
            });
        });
    });
};

//Guardar
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO categoria set ?', [data], (err, inicio) =>{
            console.log(inicio);
            res.redirect('/');
        })
    })
};

//Eliminar
controller.delete = (req, res) => {
    const { idCategoria } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM categoria WHERE idCategoria = ?', [idCategoria], (err, rows) => {
            res.redirect('/');
        });
    })
};

//Editar y Actualizar
controller.edit = (req, res) => {
    const { idCategoria } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM categoria WHERE idCategoria = ?', [idCategoria], (err, inicio) =>{
            res.render('inicio_edit', {
                data: inicio[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { idCategoria } = req.params;
    const newCustomer = req.body;
    req.getConnection((req, conn) => {
        conn.query('UPDATE categoria set ? WHERE idCategoria = ?', [newCustomer, idCategoria], (err, rows) => {
            res.redirect('/');
        })
    });
};
//---------------------------------- Producto

//Listar - Leer
controller.listProductos = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM producto', (err, producto) =>{
            if (err){
                res.json(err);
            }
            res.render('producto', {
                data: producto
            });
        });
    });
};

//Guardar
controller.saveProductos = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO producto set ?', [data], (err, producto) =>{
            console.log(producto);
            res.redirect('/productos');
        })
    })
};

//Eliminar
controller.deleteProductos = (req, res) => {
    const { idProducto } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM producto WHERE idProducto = ?', [idProducto], (err, rows) => {
            res.redirect('/productos');
        });
    })
};

//Editar y Actualizar
controller.editProductos = (req, res) => {
    const { idProducto } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM producto WHERE idProducto = ?', [idProducto], (err, producto) =>{
            res.render('producto_edit', {
                data: producto[0]
            });
        });
    });
};

controller.updateProductos = (req, res) => {
    const { idProducto } = req.params;
    const newProducto = req.body;
    req.getConnection((req, conn) => {
        conn.query('UPDATE producto set ? WHERE idProducto = ?', [newProducto, idProducto], (err, rows) => {
            res.redirect('/productos');
        })
    });
};

//---------------------------------- Rol
//Listar - Leer
controller.listRoles = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM rol', (err, rol) =>{
            if (err){
                res.json(err);
            }
            res.render('rol', {
                data: rol
            });
        });
    });
};

//Guardar
controller.saveRoles = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO rol set ?', [data], (err, rol) =>{
            console.log(rol);
            res.redirect('/roles');
        })
    })
};

//Eliminar
controller.deleteRoles = (req, res) => {
    const { idRol } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM rol WHERE idRol = ?', [idRol], (err, rows) => {
            res.redirect('/roles');
        });
    })
};

//Editar y Actualizar
controller.editRoles = (req, res) => {
    const { idRol } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM rol WHERE idRol = ?', [idRol], (err, rol) =>{
            res.render('rol_edit', {
                data: rol[0]
            });
        });
    });
};

controller.updateRoles = (req, res) => {
    const { idRol } = req.params;
    const newRol = req.body;
    req.getConnection((req, conn) => {
        conn.query('UPDATE rol set ? WHERE idRol = ?', [newRol, idRol], (err, rows) => {
            res.redirect('/roles');
        })
    });
};

//----------------------------------
//Listar - Leer
controller.listUsuarios = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM usuario', (err, usuario) =>{
            if (err){
                res.json(err);
            }
            res.render('usuario', {
                data: usuario
            });
        });
    });
};

//Guardar
controller.saveUsuarios = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO usuario set ?', [data], (err, usuario) =>{
            console.log(usuario);
            res.redirect('/usuarios');
        })
    })
};

//Eliminar
controller.deleteUsuarios = (req, res) => {
    const { idUsuario } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuario WHERE idUsuario = ?', [idUsuario], (err, rows) => {
            res.redirect('/usuarios');
        });
    })
};

//Editar y Actualizar
controller.editUsuarios = (req, res) => {
    const { idUsuario } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario WHERE idUsuario = ?', [idUsuario], (err, usuario) =>{
            res.render('usuario_edit', {
                data: usuario[0]
            });
        });
    });
};

controller.updateUsuarios = (req, res) => {
    const { idUsuario } = req.params;
    const newUsuario = req.body;
    req.getConnection((req, conn) => {
        conn.query('UPDATE usuario set ? WHERE idUsuario = ?', [newUsuario, idUsuario], (err, rows) => {
            res.redirect('/usuarios');
        })
    });
};

//----------------------------------
module.exports = controller