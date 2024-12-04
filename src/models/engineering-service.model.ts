import mongoose, { Document, Schema, Types } from "mongoose";

export interface IService extends Document {
  _id: Types.ObjectId;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  serviceBanner: string;
  serviceIcon: string;
  category: Types.ObjectId;
  SEOSettings: {
    pageTitle: {
      ar: string;
      en: string;
    };
    pageDescription: {
      ar: string;
      en: string;
    };
  };
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema: Schema = new mongoose.Schema(
  {
    title: {
      ar: { type: String, required: [true], unique: [true] },
      en: { type: String, required: [true], unique: [true] },
    },
    description: {
      ar: { type: String, required: [true] },
      en: { type: String, required: [true] },
    },
    serviceBanner: {
      type: String,
    },
    serviceIcon: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
    SEOSettings: {
      pageTitle: {
        ar: { type: String, required: [true] },
        en: { type: String, required: [true] },
      },
      pageDescription: {
        ar: { type: String, required: [true] },
        en: { type: String, required: [true] },
      },
    },
  },
  { timestamps: true }
);

serviceSchema
  .virtual("id")
  .get(function (this: IService) {
    return this._id.toHexString();
  });

serviceSchema.set("toJSON", {
  virtuals: true,
});

const Service =
  mongoose.models.Service ||
  mongoose.model<IService>(
    "Service",
    serviceSchema,
    "services"
  );

export default Service;
