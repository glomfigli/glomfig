import mongoose from "mongoose";

const schemaName = "User";

export interface IUser {
  username: string
  passwordHash: string
}

const schema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true }
});

export const User = mongoose.model<IUser>(schemaName, schema);
