import mongoose, { type Types } from "mongoose";

const schemaName = "Session";

export interface ISession {
  createdAt: Date
  maxAge: number
  user: Types.ObjectId
}

const schema = new mongoose.Schema<ISession>({
  createdAt: {
    type: mongoose.Schema.Types.Date,
    default: () => new Date()
  },
  maxAge: {
    type: mongoose.Schema.Types.Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

export const Session = mongoose.model<ISession>(schemaName, schema);
