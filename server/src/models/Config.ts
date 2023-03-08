import mongoose from "mongoose";

const schemaName = "Config";

export interface IConfig {
  name: string
  sourceText: string
}

const schema = new mongoose.Schema<IConfig>({
  name: { type: String, required: true },
  sourceText: { type: String, required: true }
});

export const Config = mongoose.model<IConfig>(schemaName, schema);
