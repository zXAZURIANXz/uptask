

const express = require('express');
var app = express();


app.get('/', (req,res) => {

    res.json('hello world');

});

app.listen(7000,() => {

    console.log('Escuchando por el puerto: ',7000);

});
