require("dotenv").config();

const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const postRoutes = require("./routes/post");

app.use(express.json());
app.use(cors());

// Serve static folder when in deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
}

app.use("/api/post", postRoutes);

mongoose.connect(process.env.DB_URL);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
