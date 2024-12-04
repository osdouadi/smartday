import mongoose, { Document, Schema, Types } from "mongoose";

export interface IGlobalMetadata extends Document {
  _id: Types.ObjectId;
  homePageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
  aboutUsPageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
  pricingPageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
  contactPageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
  blogsPageMetadata: {
    title: { ar: string; en: string };
    description: { ar: string; en: string };
  };
  createdAt: Date;
  updatedAt: Date;
}

const globalMetadataSchema: Schema = new mongoose.Schema(
  {
    homePageMetadata: {
      title: { ar: String, en: String },
      description: { ar: String, en: String },
    },
    aboutUsPageMetadata: {
      title: { ar: String, en: String },
      description: { ar: String, en: String },
    },
    pricingPageMetadata: {
      title: { ar: String, en: String },
      description: { ar: String, en: String },
    },
    contactPageMetadata: {
      title: { ar: String, en: String },
      description: { ar: String, en: String },
    },
    blogsPageMetadata: {
      title: { ar: String, en: String },
      description: { ar: String, en: String },
    },
  },
  { timestamps: true }
);

globalMetadataSchema.virtual("id").get(function (this: IGlobalMetadata) {
  return this._id.toHexString();
});

globalMetadataSchema.set("toJSON", {
  virtuals: true,
});

const GlobalMetadata =
  mongoose.models.GlobalMetadata ||
  mongoose.model<IGlobalMetadata>(
    "GlobalMetadata",
    globalMetadataSchema,
    "globalMetadatas"
  );

export default GlobalMetadata;
