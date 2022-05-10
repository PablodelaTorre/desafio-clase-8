const productoExistente = require('../middelwares/productosExistentes')
const errorMiddleware = require('../middelwares/errorMiddleware')
const { Router } = require('express')
const router = Router()
// const Container = require('../container')
// const containerProducts = new Container()
const multer = require('multer')

const productos = []
num = 1


router.get('/', (req,res) => {
    res.json({productos:productos})
})

// async getById(numero){
//     try {
//         let informacion = await fs.promises.readFile(this.arch, "utf-8")
//         let informacionUtil = JSON.parse(informacion).forEach(x => {
//             if (x.id == numero){
//                 console.log(x)
//                 return x
//             } else {
//                 return null
//             }
//         })
//     } catch (error) {
//         console.log('error',error)
//     }
// }
async function getById(numero) {
    const pro = await productos.forEach(p => {
        if(p.id == Number(numero)){
            console.log(p)
            console.log(p)
            console.log(p)
            return p
        } else {
            return "error"
        }
    })
    let prod = JSON.parse(pro)
    console.log(prod)
    return prod
}

router.get('/:id',(req,res) => {
    const { id } = req.params;
    const product = getById(id)
    product ? res.json({product}) 
            : res.json({message: 'Producto no encontrado. Id: '+ id});
    // const prod = productos.forEach(p => {
    //     if(p.id == Number(id)){
    //         console.log(p)
    //         console.log(p)
    //         console.log(p)
    //         return p
    //     } else {
    //         return error
    //     }
    //})
    // console.log(prod)
    //     console.log(prod)
    //     console.log(prod)
    // res.json({prod})
})

router.post('/', (req,res) => {
    let producto = req.body
    const {title, price, photo} = producto
    console.log(title)
    console.log(price)
    console.log(photo)
    let id = num
    const prod = {
        title,
        price,
        photo,
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