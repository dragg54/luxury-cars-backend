const express = require("express")
const route = express.Router()
const CarController = require("../controllers/CarController")
const CarRender = require("../services/CarRender")

//API
route.post("/api/new", CarController.create)
route.get("/api/cars",CarController.find )

//routes
route.get('/cars', CarRender.getAllCars)
route.get('/new', CarRender.addNewCar )


module.exports = route