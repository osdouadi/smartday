import mongoose, { Document, Schema, Types } from "mongoose";

export interface IApp extends Document {
  _id: Types.ObjectId;
  appName: {
    ar: string;
    en: string;
  };
  appDescription: {
    ar: string;
    en: string;
  };
  slogan: {
    ar: string;
    en: string;
  };
  logo: {
    type: string;
  };
  font: {
    type: string;
  };
  theme: {
    type: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const appSettingsSchema: Schema = new mongoose.Schema(
  {
    appName: {
      ar: {
        type: String,
      },
      en: {
        type: String,
      },
    },
    appDescription: {
      ar: {
        type: String,
      },
      en: {
        type: String,
      },
    },
    solgan: {
      ar: {
        type: String,
      },
      en: {
        type: String,
      },
    },
    logo: {
      type: String,
    },
    font: {
      type: String,
    },
    theme: {
      type: String,
    },
  },
  { timestamps: true }
);

appSettingsSchema.virtual("id").get(function (this: IApp) {
  return this._id.toHexString();
});

appSettingsSchema.set("toJSON", {
  virtuals: true,
});

const AppSettings =
  mongoose.models.AppSettings ||
  mongoose.model<IApp>("AppSettings", appSettingsSchema, "appSettings");

export default AppSettings;
