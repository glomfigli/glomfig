import mongoose, { type Types } from "mongoose";

const schemaName = "User";

export interface IUser {
  username: string
  passwordHash: string
  configs: Types.ObjectId[]
}

const schema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  configs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Config"
    }
  ]
});

export const User = mongoose.model<IUser>(schemaName, schema);
