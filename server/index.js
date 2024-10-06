import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./config/dbconfig.js";
import portfolioRoute from "./routes/portfolioRoute.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["https://deploy-mern-portfolio-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use("/api/portfolio", portfolioRoute);

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
  connectMongoDB();
});
