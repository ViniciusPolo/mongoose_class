const mongoose = require("mongoose")
require('dotenv').config()


async function main() {
  try {
    
    mongoose.set("strictQuery", true)

    await mongoose.connect(`mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@cluster0.h6pqdpb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log("connectado ao banco")
  } catch (error) {
    console.error("não conectado " + error)
  }
  
}

module.exports = main;