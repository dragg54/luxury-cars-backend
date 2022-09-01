const mongoose = require("mongoose")

const CarSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true,
  },
  consumption: {
    type: String,
    required: true,
  },
  speed: {
    type: String,
    required: true,
  },
  overclocking: {
    type: String,
    required: true,
  },
  battery: {
    type: String,
    required: true,
  },
  modelYear: {
    type: Number,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  numberOfSeats: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: false,
  },
});
const CarDb = mongoose.model("cars", CarSchema)
module.exports = {
    CarDb
}  