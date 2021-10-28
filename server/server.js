// 1st step
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");
// 2ND sTEP
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);
// 3RD sTEP
const CONNECTION_URL =
  "mongodb+srv://Ogunleye:tumininu10@cluster0.84if6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
// 4TH sTEP
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
  ).catch;
(error) => console.log(error.message);

// Ensures we dont get any warningns in the console

// 4th Step create routes for our app in routes folder
