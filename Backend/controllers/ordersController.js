const orderModel = require("../models/orderModel");
//order - api/v1/order
exports.createOrders = async (req, res, next) => {
  // console.log(req.body, "DATA");
  const cartItems = req.body;
  const amount = Number(
    cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0)
  ).toFixed(2);
  const status = "pending";

  // console.log(amount, "AMOUNT");To display the amount to the console log

  const order = await orderModel.create({ cartItems, amount, status });

  res.json({
    success: true,
    order,
  });
};
