const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // Middlewares = siempre se ejecutara cuando se levante el servidor
        this.middlewares();

        //rutas de mi aplicacion
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use( cors() );

        //lectura y parseo del body
        this.app.use( express.json() );



        //directorio publico
        // el .use  es lo que me hace saber que es un middlewares
        this.app.use( express.static('public'));


    }
 
    routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));

    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('servidor corriendo en el puerto', this.port);
        });
    }

}



module.exports = Server;