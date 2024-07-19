const model = require("../Model/cartModel");
const Cart = model.Cart;

exports.insertIntoCart = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    console.log(req.body);
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Cart.find();
    console.log("fetched all cart items");
    res.status(201).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllItemsByUser = async (req, res) => {
  try {
    // console.log(req.params);
    const id = req.params.id;
    console.log(id);
    const items = await Cart.find({ user: id });
    console.log("fetched all cart items");
    res.status(201).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteItemById = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Cart.findByIdAndDelete(productId);
    if (deletedProduct) {
      res.status(201).json("delted Successfully");
    } else {
      res.status(201).json("product not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateItemById = async (req, res) => {
  const productId = req.params.id;
  const updateFields = req.body;
  console.log(updateFields);
  try {
    const updatedProduct = await Cart.findByIdAndUpdate(
      productId,
      { $set: updateFields },
      { new: true } // This option returns the updated document
    );

    if (updatedProduct) {
      res.json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } else {
      res.status(404).json({ message: "No product found with the given ID" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

exports.deleteItemByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("inside the useid wala ");
    await Cart.deleteMany({ user: id });
    res.status(200).json({ message: "Cart items deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
