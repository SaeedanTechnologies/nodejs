const product = require("../models/product");
const { options } = require("../routes/product");

const getAllProducts = async (req, res) => {
    const myData = await product.find({});
    res.status(200).json({ message: "success", data: myData });
};

const getAllProductsTesting = async (req, res) => {
    const { company, name } = req.query;
    const queryObject = {};

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    if (company) {
        queryObject.company = company;
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3; // Default limit to 10 items per page
    let skip = (page - 1) * limit;

    try {
        const myData = await product
            .find(queryObject)
            .skip(skip) // Apply pagination with skip
            .limit(limit); // Apply limit to control page size

        res.status(200).json({ message: "success", data: myData });
    } catch (error) {
        res.status(500).json({ message: "error", error: error.message });
    }
};

module.exports = { getAllProducts, getAllProductsTesting };