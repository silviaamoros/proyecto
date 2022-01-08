function getHello(req, res){
    res.send("¡Hola Mundo desde controllers!");
}

//fichero para cargar las diferentes funciones de nuestra aplicación

module.exports = {
    getHello,
};