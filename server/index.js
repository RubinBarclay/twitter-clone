require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const postRoutes = require("./routes/post");

app.use(express.json());

app.use("/api/post", postRoutes);

mongoose.connect(process.env.DB_URL);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
