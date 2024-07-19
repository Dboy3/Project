const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();
const productRouter = require("./Routes/productsRoutes");
const userRouter = require("./Routes/userRoutes");
const cartRouter = require("./Routes/cartRoutes");
const orderRouter = require("./Routes/orderRoutes");
// db connection
connectDb().catch((err) => console.log(err));

// coz sometimes it takes time to connect the database

async function connectDb() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce_database");
  console.log("Db connected");
}
// server.get("/", (req, res) => {
//   res.send("Hello World!");
// });

server.use(cors());
server.use(express.json());
server.use("/products", productRouter.router);
server.use("/user", userRouter.router);
server.use("/cart", cartRouter.router);
server.use("/order", orderRouter.router);

server.listen(8080, () => {
  console.log("server started");
});
