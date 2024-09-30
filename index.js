import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./routes/Routes.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 5000;
const DATABASE_NAME = process.env.DATABASE_NAME;

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@projectmindxfullstack.6uegx.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(Routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
