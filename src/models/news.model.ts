import mongoose, { Document, Schema, Types } from "mongoose";

export interface INews extends Document {
  _id: Types.ObjectId;
  newsAR: string;
  newsEN: string;
}

const newsSchema: Schema = new mongoose.Schema(
  {
    newsAR: String,
    newsEN: String,
  },
  { timestamps: true }
);

newsSchema.virtual("id").get(function (this: INews) {
  return this._id.toHexString();
});

newsSchema.set("toJSON", {
  virtuals: true,
});

const News =
  mongoose.models.News || mongoose.model<INews>("News", newsSchema, "news");

export default News;
