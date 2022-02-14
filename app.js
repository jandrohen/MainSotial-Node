'use strict'

var express = require('express');
var app = express();

//load routes

//Middlewares
app.use(express.urlencoded({
   extended: false
}));

//Cors

//Routes
app.get('/pruebas', ((req, res) => {
   console.log(req.query);
   res.status(200).send({
      message: 'Test action'
   });
}))

//Exportar la configuración
module.exports = app;
