import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./config/dbconfig.js";
import portfolioRoute from "./routes/portfolioRoute.js";
import path from "path";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.use("/api/portfolio", portfolioRoute);

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
  connectMongoDB();
});
