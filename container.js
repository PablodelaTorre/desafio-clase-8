const fs = require('fs')

class Container {
    constructor(){
    }
    productos = []

    guardarP(nuevoProd){
        let id = 0
        if(this.productos.length === 0){
            id = 1
        } else {
            id = this.productos[this.productos.length-1].id + 1
        }

        let productoNuevo = {
            'id': id,
            'title': nuevoProd.title,
            'price': nuevoProd.price,
            'photo': nuevoProd.photo
        }

        this.productos.push(productoNuevo)
    }
}

module.exports = Container