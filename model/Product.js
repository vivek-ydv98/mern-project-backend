const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, min: [1, "wrong min price"], max: [100000, "wrong max price"]},
  discountPercentage: { type: Number, min: [1, "wrong min discount"], max: [80, "wrong max discount"]},
  rating: {type: Number,min: [0, "wrong min rating"],max: [5, "wrong max rating"]},
  stock: { type: Number, min: [0, "wrong min rating"], default: 0 },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: [String], required: true },
  deleted: { type: Boolean, default: false },
});

const virtual = ProductSchema.virtual("id");
virtual.get(function () {
  return this._id;
});
ProductSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Product = mongoose.model("Product", ProductSchema);
