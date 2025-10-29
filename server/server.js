import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

import hotelRoutes from "./routes/hotel.route.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
