import mongoose from "mongoose";


const schemaName = "Config";

export interface IConfig {
  name: string
  config: [{ key: string, value: string }]
}

const schema = new mongoose.Schema<IConfig>({
  name: { type: String, required: true },
  config: [{ key: String, value: String }]
});

export const Config = mongoose.model<IConfig>(schemaName, schema);