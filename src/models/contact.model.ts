import mongoose, { Document, Schema, Types } from "mongoose";

export interface IContact extends Document {
  _id: Types.ObjectId;
  fullName: string;
  email: string;
  phoneNumber: string;
  letterTitle: string;
  letterSubject: string;
}

const contactSchema: Schema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phoneNumber: String,
    letterTitle: String,
    letterSubject: String,
  },
  { timestamps: true }
);

contactSchema.virtual("id").get(function (this: IContact) {
  return this._id.toHexString();
});

contactSchema.set("toJSON", {
  virtuals: true,
});

const Contact =
  mongoose.models.Contact ||
  mongoose.model<IContact>("Contact", contactSchema, "contacts");

export default Contact;
