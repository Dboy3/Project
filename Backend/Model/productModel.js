const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Review Schema
const reviewSchema = new Schema({
  rating: { type: Number, min: 0, max: 5, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reviewerName: { type: String, required: true },
  reviewerEmail: { type: String, required: true },
});

// Define Product Schema
const productSchema = new Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number, min: 0, max: 5 },
  stock: { type: Number },
  tags: { type: [String] },
  brand: { type: String },
  sku: { type: String },
  weight: { type: Number },
  dimensions: {
    width: { type: Number },
    height: { type: Number },
    depth: { type: Number },
  },
  warrantyInformation: { type: String },
  shippingInformation: { type: String },
  availabilityStatus: { type: String },
  reviews: [reviewSchema], // Embedding the Review schema as an array
  returnPolicy: { type: String },
  minimumOrderQuantity: { type: Number },
  meta: {
    createdAt: { type: Date },
    updatedAt: { type: Date },
    barcode: { type: String },
    qrCode: { type: String },
  },
  images: { type: [String] },
  thumbnail: { type: String },
});

productSchema.virtual("id").get(function () {
  return this._id;
});
// This defines a virtual property id on Product schema, which computes its value based on _id field of the document.

productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

//  yeah code _id ko id bolega

// Create model
exports.Product = mongoose.model("Product", productSchema);
