const express = require("express");
const connectDB = require("./config/db.js");
const path = require("path");
const cors = require("cors");
require("dotenv").config({ path: "config/config.env" });
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//app.use("/upload", express.static(path.join(__dirname, "/upload")));
//db
connectDB();

//routes

app.use("/api/player", require("./routes/playerRoute"));
app.use("/api/upload", require("./routes/uploadRoute"));
app.use("/api/users", require("./routes/userRoute"));
//build
let NODE_ENV = "production";
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running...");
  });
}
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("server running");
});
