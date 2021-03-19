const controller = {};
//----------------------------------
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
//----------------------------------

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
//----------------------------------
module.exports = controller