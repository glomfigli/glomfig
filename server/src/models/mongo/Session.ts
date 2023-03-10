import { Schema, model } from "mongoose";
import type ISession from "../ISession";

const schema = new Schema({
  createdAt: {
    type: Schema.Types.Date,
    default: () => new Date()
  },
  maxAge: {
    type: Schema.Types.Number,
    required: true
  },
  authenticationToken: {
    type: Schema.Types.String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Session = model<ISession>("Session", schema);

export default Session;
