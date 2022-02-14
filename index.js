'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;
//DB connections
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean_sotial', {
    useNewUrlParser: true, useUnifiedTopology: true, family: 4
})
    .then(() =>{
        console.log("La conexión a la BBDD se ha realizado ok");
        //Crear servidor
    app.listen(port, () =>{
        console.log('Server running at http://localhost')
    });
    })
    .catch(err => console.log(err));
