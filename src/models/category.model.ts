import mongoose, { Document, Schema, Types } from "mongoose";

export interface ICategory extends Document {
  _id: Types.ObjectId;
  title: {
    ar: string;
    en: string;
  };
  summary: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  categoryImage: string;
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

const categorySchema: Schema = new mongoose.Schema(
  {
    title: {
      ar: { type: String, required: [true], unique: [true] },
      en: { type: String, required: [true], unique: [true] },
    },
    summary: {
      ar: { type: String, required: [true] },
      en: { type: String, required: [true] },
    },
    description: {
      ar: { type: String, required: [true] },
      en: { type: String, required: [true] },
    },
    categoryImage: {
      type: String,
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

categorySchema.virtual("id").get(function (this: ICategory) {
  return this._id.toHexString();
});

categorySchema.set("toJSON", {
  virtuals: true,
});

const Category =
  mongoose.models.Category ||
  mongoose.model<ICategory>(
    "Category",
    categorySchema,
    "categories"
  );

export default Category;
