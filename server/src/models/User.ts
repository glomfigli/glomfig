import mongoose from "mongoose";

const schemaName = "User";

const schema = new mongoose.Schema({
  username: String,
  password: String,
});

const model = mongoose.model(schemaName, schema);

export default model;
