const dotenv= require("dotenv").config();
const express = require("express");
const app = express();
const productRoutes=require("./routes/product")
const db_Connect = require("./config/database")




app.use("/api/products",productRoutes)

app.get("/", (req, res) => {
    res.send("hi i am live");
})


const start=async()=>{
    try {
        await  db_Connect();
         app.listen(process.env.PORT)
         console.log("server started")
    } catch (error) {
        console.log(error)
    }
}

start();