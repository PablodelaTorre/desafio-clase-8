const productoExistente = require('../middelwares/productosExistentes')
const errorMiddleware = require('../middelwares/errorMiddleware')
const { Router } = require('express')
const router = Router()
const productos = []
num = 1


router.get('/', (req,res) => {
    res.json({productos:productos})
})

router.get('/:id',productoExistente,errorMiddleware,(req,res) => {
    const prod = products.find(p => p.id == params)
    res.json({prod})
})

router.post('/', (req,res) => {
    let producto = req.body
    producto.push(id)
    producto.id = num
    num++
    productos.push(producto)
    res.json({mensaje:"Producto agregado con éxito"})
})
router.put
router.delete


module.exports = router 