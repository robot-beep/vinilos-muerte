require('./config/conexion');

const bodyparser = require('body-parser')
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//admitir

app.use(express.json())

//port 

const port = (process.env.port || 3000);

//config port 

app.set('port', port)

//rutas 

app.use('/api', require('./rutas'))

//iniciar express
app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('error al iniciar el servidor: '+ error)
    }
    else{
        console.log('servidor iniciado en el puerto: ' + port)
    }
})