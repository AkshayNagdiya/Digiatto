const express = require("express");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// DATABSE CONNECTION
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/navbar", require("./routes/Navbar"));
app.use("/weareexpert", require("./routes/WeAreExpert"));
app.use("/herosection", require("./routes/Herosectionroute"));
app.use("/homeslider", require("./routes/Homeslider"));
app.use("/whatwedo", require("./routes/Whatwedo"));
app.use("/project", require("./routes/Projectmanagment"));
app.use("/projectcategory", require("./routes/Projectcategory"));
app.use("/service", require("./routes/Services"));
app.use("/portfolio", require("./routes/Portfolio"));
app.use("/contactinfo", require("./routes/Contact"));
app.use("/expertadvice", require("./routes/Expertconnect"));
app.use("/hireme", require("./routes/Hireme"));
app.use("/awards", require("./routes/Award"));
app.use("/footer", require("./routes/Footer"));
app.use("/excellence", require("./routes/Excellenceyear"));
app.use("/serviceslider", require("./routes/ServiceSlider"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT PORT:${PORT}`.bgBlue);
});
