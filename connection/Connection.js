const mongoose = require("mongoose")

//create database connection
const connectDb = async() =>{
    mongoose.connect("mongodb://127.0.0.1:27017/luxury-cars",  {useUnifiedTopology: true}, (err)=>{
        if(!err){
            console.log(mongoose.connection.readyState)
        }
        else{
            console.log(err)
            console.log(typeof process.env.MongoUrl)
        }
    })
}

module.exports = connectDb 