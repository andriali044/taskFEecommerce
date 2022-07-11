require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./model/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data import sucess");
    process.exit();
  } catch (error) {
    console.error("Data import failed");
    process.exit(1);
  }
};

importData();