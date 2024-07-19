const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const model1 = require("./userModel");
const { cartSchema } = require("./cartModel");
const AddressSchema = model1.AddressSchema;

const OrderSchema = new Schema({
  cartItems: [cartSchema],
  paymentMode: { type: String, required: true },
  selectedAddress: { type: AddressSchema, required: true },
  totalAmount: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

OrderSchema.virtual("id").get(function () {
  return this._id;
});

OrderSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = {
  Order,
};
