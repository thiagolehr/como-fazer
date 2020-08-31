const express = require('express')
const app = express() //nova instância de express
const bodyParser = require('body-parser')

const publicacoes = require('./routes/publicacoes')
const categorias = require('./routes/categorias')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

app.get('/', async(req, res) =>{
    res.render('index')
})

app.use('/categorias',categorias)
app.use('/publicacoes',publicacoes)

app.listen(port, (err) => {
    if(err){
        console.log('error')
    }else{
        console.log('Como-Fazer Server is running on port', port)
    }
})

