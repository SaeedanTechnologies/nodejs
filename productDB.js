require("dotenv").config();
const connectDB = require("./config/database");
const product = require("./models/product");

const start = async () => {
    try {
        await connectDB();
        await product.deleteMany();
        await product.create([
            {
                "name": "Iphone12",
                "price": 345.7,
                "featured": false,
                "rating": 3.6,
                "createdAt":Date.now(),
                "company": "Apple"
            },
            {
                "name": "Samsung A23",
                "price": 345.7,
                "featured": false,
                "rating": 3.6,
                "createdAt":Date.now(),
                "company": "Samsung"
            },
            {
                "name": "iphone14",
                "price": 345.7,
                "featured": true,
                "rating": 3.6,
                "createdAt":Date.now(),
                "company": "Apple"
            }

        ])
    } catch (error) {
        console.log(error)
    }
}

start();