import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "../../.env") });

export const env = process.env.NODE_ENV;
export const DB_URL_DEVELOPMENT = process.env.DB_URL_DEVELOPMENT;
export const DB_URL_TESTING = process.env.DB_URL_TESTING;
export const DB_URL_PRODUCTION = process.env.DB_URL_PRODUCTION;

export const port = process.env.PORT || 142;
export const morganLogFormat =
  process.env.NODE_ENV === "production" ? "combined" : "dev";
