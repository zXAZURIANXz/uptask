

require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {

    res.json('hello world');

});

app.post('/usuarios', (req,res) => {

    let body = req.body;

    if( body.nombre === undefined ){

        res.status(400).json({
            ok : false,
            mensaje : "el nombre es necesario"
        })

    } else {

        res.json({
            persona:body
        });


    }


    
});

app.put('/usuario/:id', (req,res) => {

    let id = req.params.id;
    res.json({

        id : id,
        

    });

});

app.listen(process.env.PORT,() => {

    console.log('Escuchando por el puerto: ',process.env.PORT);

});
