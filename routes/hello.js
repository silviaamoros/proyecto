const express = require("express");
const HelloController = require("../controllers/hello");

const api = express.Router();

//fichero para generar todas nuestras rutas
api.get("/hello", HelloController.getHello);

module.exports = api;