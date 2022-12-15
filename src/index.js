const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const app = express()
mongoose.set('strictQuery', false)

app.use(express.json())

mongoose.connect('mongodb+srv://arsh26:WZdIsZMdgBi1eOxE@cluster0.tytwkvw.mongodb.net/arshad',
{useNewUrlParser: true})

.then(() => console.log('MongoDB is connected'))
.catch(err => console.log(err))

app.use('/', route)

route.all('/*', function(req, res){
    res.status(400).send({status: false, message: 'Url Wrong'})
})

app.listen( 3000, function(){
    console.log('Express app running on PORT ' + 3000)
})