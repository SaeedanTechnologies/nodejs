const express = require("express");
const router = express.Router(); // Correctly initialize as 'router'

// Import controller functions
const { getAllProducts, getAllProductsTesting } = require("../controllers/product");

// Define routes
router.get("/getAllProducts", getAllProducts);
router.get("/getAllProductstesting", getAllProductsTesting);

// Alternatively, using router.route()
/*
router.route("/")
  .get(getAllProducts);

router.route("/testing")
  .get(getAllProductsTesting);
*/

// Export the router
module.exports = router;
