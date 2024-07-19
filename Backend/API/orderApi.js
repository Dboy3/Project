const model = require("../Model/orderModel");
const Order = model.Order;

exports.getOrdersByUser = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Order.find({ user: id });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.insertOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const newOrder = await order.save();
    res.status(201).json(newOrder);
    console.log("order Inserted ");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.fetchOrdersByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const items = await Cart.find({ user: id });
    console.log("fetched all cart items");
    res.status(201).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
