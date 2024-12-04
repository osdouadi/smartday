import mongoose, { Document, Schema, Types } from "mongoose";

export interface IPricingOrder extends Document {
  _id: Types.ObjectId;
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  address: string;
  service: string;
}

const pricingOrderSchema: Schema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phoneNumber: String,
    city: String,
    address: String,
    service: String,
  },
  { timestamps: true }
);

pricingOrderSchema.virtual("id").get(function (this: IPricingOrder) {
  return this._id.toHexString();
});

pricingOrderSchema.set("toJSON", {
  virtuals: true,
});

const PricingOrder =
  mongoose.models.PricingOrder ||
  mongoose.model<IPricingOrder>(
    "PricingOrder",
    pricingOrderSchema,
    "pricingOrders"
  );

export default PricingOrder;
