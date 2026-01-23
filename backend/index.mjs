//task-it/backend/index.mjs
import dotenv from "dotenv";
import mongoose from "mongoose";
import { createApp } from "./createApp.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log(`Error: ${err}`));
dotenv.config();

const app = createApp();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
