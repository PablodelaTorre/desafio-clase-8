const express = require('express')
const app = express()
const routesDesafio = require("./routes/routes.js")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))
app.use('/api/productos', routesDesafio)

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`)
})