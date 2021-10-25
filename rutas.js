const rutas = require("express").Router()
const conexion = require('./config/conexion')

//asignamos todas las rutas

//get producto
rutas.get('/', (req, res)=>{
    let sql= 'select * from producto'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//get producto by id
rutas.get('/:id_producto', (req, res)=>{
    const{id_producto} = req.params
    let sql=  `select * from producto where id_producto='${id_producto}'`
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


//modificar producto
rutas.put('/:id_producto',(req,res)=>{
    const{id_producto}=req.params
    const{titulo, autor,formato,estado,descuento, valor, stock, rut_adm_p}= req.body
    let sql= `update producto SET titulo ='${titulo}',autor = '${autor}',formato = '${formato}' , estado = '${estado}',descuento = '${descuento}', valor = '${valor}', stock = '${stock}', rut_adm_p = '${rut_adm_p}'  WHERE id_producto = '${id_producto}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) console.log(err)
        else{
            res.json({status: "producto modificado"})
        }
    })
})

//agregar producto
rutas.post('/', (req, res)=>{
    const{id_producto, titulo, autor, formato, estado, descuento, valor, stock, imagen, rut_adm_p} = req.body
    let sql = `insert into producto(id_producto, titulo, autor, formato, estado, descuento, valor, stock, imagen, rut_adm_p) values('${id_producto}', '${titulo}', '${autor}', '${formato}', '${estado}', '${descuento}','${valor}','${stock}','${imagen}', '${rut_adm_p}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) console.log(err)
        else{
            res.json({status: "producto agregado"}) 
        }
    })
})

//eliminar producto
rutas.delete('/:id_producto',(req,res)=>{
    const{id_producto} = req.params //comprobar
    let sql = `delete from producto where id_producto='${id_producto}'`
    conexion.query(sql, (err, rows, fields)=>{
    console.log(sql)
    if(err) console.log(err)
        else{
            res.json({status: "producto eliminado"})
        }
    })

})

0
//eliminar producto
rutas.delete('/:num_producto',(req,res)=>{
    const{num_producto} = req.params //comprobar
    let sql = `delete from producto where num_producto='${num_producto}'`
    conexion.query(sql, (err, rows, fields)=>{
    console.log(sql)
    if(err) console.log(err)
        else{
            res.json({status: "producto eliminado"})
        }
    })

})

//----------------------------

module.exports = rutas; 