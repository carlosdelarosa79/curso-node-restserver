const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query;
    res.json ({
        msg: 'get api- controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res) => {

    const { id }= req.params;
    res.json ({
        msg: 'put api - controlador',
        id
    });
}

const usuariosPost = (req, res) => {

        //los { } son para desestructurar el objeto , o llamar la informacion q deseo
    const { nombre, edad } = req.body;

    res.json ({
        msg: 'post api- controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res) => {
    res.json ({
        
        msg: 'delete api- controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}