import mongoose from "mongoose";

function connect() {
  const databaseUri = process.env["DATABASE_URI"];
  if (!databaseUri)
    throw new Error("Error: database connection string not found!");
  mongoose.connect(databaseUri);
}

export default {
  connect
};
