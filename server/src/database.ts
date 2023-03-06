import mongoose from "mongoose";

async function connect (): Promise<void> {
  const databaseUri: string = process.env.DATABASE_URI ?? "";
  if (databaseUri.length === 0) {
    throw new Error("Error: database connection string is empty or missing!");
  }

  try {
    await mongoose.connect(databaseUri);
  } catch (connectionError) {
    console.error("An error occurred while trying to connect to the database!");
    console.error(connectionError);
  }
}

export default {
  connect
};
