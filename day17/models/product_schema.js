const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const productSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    price: {
      type: Number,
      min: 0,
      require: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    description: String,
    quanity: {
      type: Number,
      default: 1,
    },
    image: [String],
  },
  {
    versionKey: false,
    timeseries: true,
  }
);

const Product = model("product", productSchema);
module.exports = { Product };
