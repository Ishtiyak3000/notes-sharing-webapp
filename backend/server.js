const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");
const friendRoutes = require("./routes/friends");
const fileRoutes = require("./routes/files");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/auth", authRoutes);
app.use("/friends", friendRoutes);
app.use("/files", fileRoutes);

mongoose
  .connect("mongodb://localhost:27017/filesharing")
  .then(() => app.listen(5000, () => console.log("Server on 5000")));
