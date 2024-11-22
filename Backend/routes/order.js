const express = require("express");
const { createOrders } = require("../controllers/ordersController");
const router = express.Router();

router.route("/order").post(createOrders);

module.exports = router;
