// const routes = require("express").Router();
const {Router} = require("express");

const EntityController = require("../controllers/EntityController")

const routes = Router();

// endpoints definidos para a entidade
routes.get("/get", EntityController.controllerFunction);

module.exports = routes;
