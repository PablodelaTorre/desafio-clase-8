const { Router } = require('express')
const router = Router()
const productos = []


router.get('/', (req,res) => {
    res.json({productos:productos})
})
router.get
router.post('/', (req,res) => {
    const producto = req.body
    productos.push(producto)
    res.json({mensaje:"Producto agregado con éxito"})
})
router.put
router.delete


module.exports = router 