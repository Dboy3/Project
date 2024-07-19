const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Cart schema
const cartSchema = new Schema({
  thumbnail: {
    type: String,
    required: true,
    default: "NO VALUE",
  },
  title: {
    type: String,
    required: true,
    default: "NO VALUE",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    required: true,
    default: "NO VALUE",
  },
  brand: {
    type: String,
    required: true,
    default: "NO VALUE",
  },
  category: {
    type: String,
    required: true,
    default: "NO VALUE",
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    default: null,
  },
});

// Create a compound index on title and user fields
cartSchema.index({ title: 1, user: 1, id: 1 }, { unique: true });

cartSchema.virtual("id").get(function () {
  return this._id;
});
// This defines a virtual property id on Product schema, which computes its value based on _id field of the document.

cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = {
  Cart,
  cartSchema,
};
