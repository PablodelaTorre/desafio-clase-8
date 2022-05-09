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
    const { id } = req.params;
    const prod = productos.find(p => p.id == Number(id))
    res.json({prod})
})

router.post('/', (req,res) => {
    let producto = req.body
    const {title, price, thumbnail} = producto
    console.log(title)
    console.log(price)
    console.log(thumbnail)
    let id = num
    const prod = {
        title,
        price,
        thumbnail,
        id
    }
    console.log(prod)
    productos.push(prod)
    num++
    res.json({mensaje:"Producto agregado con éxito"})
})

router.put

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    productos.forEach(produc => {
        if(produc.id){
            productos.filter(x => x.id !== id)
        }
    })
})


module.exports = router 