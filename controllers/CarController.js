const { CarDb } = require("../models/CarModel")

exports.create = (req, res) =>{
    cars = new CarDb({
        model: req.body.model,
        price: req.body.price,
        color: req.body.color,
        consumption: req.body.consumption,
        speed: req.body.speed, 
        overclocking: req.body.overclocking,
        battery: req.body.battery,
        modelYear: req.body.year,
        engine: req.body.engine,
        numberOfSeats: req.body.seats,
        transmission: req.body.transmission
    })
    cars.save(cars)
    .then(response=>{
        res.status(302).redirect("http://localhost:3000/cars")
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.find = (req, res)=>{
    CarDb.find()
    .then(response=>{
        res.status(302).json(response)
    })
    .catch(err=>{
        res.status(400).send(err)
    })
}