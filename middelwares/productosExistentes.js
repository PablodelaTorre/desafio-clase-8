const productoExistente = function(req,res,next){
    const error = "No existe el producto indicado"
    if(!productos.includes(producto.id)){
        next(error)
    }
    next()
}

module.exports = productoExistente;