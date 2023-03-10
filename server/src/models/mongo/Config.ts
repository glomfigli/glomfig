import { Schema, model } from "mongoose";
import type IConfig from "../IConfig";

const schema = new Schema({
  name: { type: String, required: true },
  sourceText: { type: String, required: true }
},
{
  toJSON: {
    transform (doc, ret) {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
    }
  }
});

const Config = model<IConfig>("Config", schema);

export default Config;
