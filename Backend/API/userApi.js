const model = require("../Model/userModel");
const User = model.User;

exports.insertUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    console.log(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log("fetched all users");
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateUserAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const newAddress = req.body;
    console.log(id, " : the id of user");
    const user = await User.findById(id);
    console.log(user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.addresses.push(newAddress);
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
