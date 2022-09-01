const fetch = require("node-fetch")

//fetch car data from the api
exports.getAllCars= async(req, res)=>{
    const response = await fetch("http://localhost:3000/api/cars")
    const data = await response.json()
    res.status(200).render("index", {cars:data})
}

exports.addNewCar =async(req, res)=>{
    try{
        res.status(200).render("addcars")
    }
    catch(err){
        res.status(502).render("addcars")
    }
}