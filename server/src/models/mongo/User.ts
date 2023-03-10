import { Schema, model } from "mongoose";
import type IUser from "../IUser";

const schema = new Schema({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  configs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Config"
    }
  ]
},
{
  toJSON: {
    transform (doc, ret) {
      ret.id = doc._id;
      delete ret._id;
      delete ret.passwordHash;
      delete ret.__v;
    }
  }
});

const User = model<IUser>("User", schema);

export default User;
