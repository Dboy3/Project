const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  country: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: true },
  pincode: { type: String, required: true },
});

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  addresses: [AddressSchema],
});

userSchema.virtual("id").get(function () {
  return this._id;
});
// This defines a virtual property id on Product schema, which computes its value based on _id field of the document.

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User,
  AddressSchema,
};
