const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors")

const rotaRegistro = require('./routes/registro');
const rotaPergunta = require('./routes/perguntasConsultar');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header',
     'Origin, X-Requrested-With, Content-Type, Accept, Authorization'
     );

     if(req.method === 'OPTIONS') {
         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
         return res.status(200).send({});
     }

     next();
})


app.use('/registro', rotaRegistro);
app.use('/perguntas', rotaPergunta);


app.use((req, res, next) => {
    const erro = new Error('Não econtrado');
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app;