import mongoose, { Document, Schema, Types } from "mongoose";

export interface IOrder extends Document {
  _id: Types.ObjectId;
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  address: string;
  categoryId: Types.ObjectId;
  additionalNote: string;
}

const orderSchema: Schema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phoneNumber: String,
    city: String,
    address: String,
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    additionalNote: String,
  },
  { timestamps: true }
);

orderSchema.virtual("id").get(function (this: IOrder) {
  return this._id.toHexString();
});

orderSchema.set("toJSON", {
  virtuals: true,
});

const Order =
  mongoose.models.Order ||
  mongoose.model<IOrder>("Order", orderSchema, "Orders");

export default Order;
