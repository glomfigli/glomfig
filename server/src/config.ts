import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), "./.env") });

export const SESSION_SECRET: string = process.env.SESSSION_SECRET ?? "";
if (SESSION_SECRET.length === 0) {
  throw new Error("Session secret key is invalid or missing");
}
