const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products = require("./routes/product");
const orders = require("./routes/order");
const connectDataBase = require("./config/connectDataBase");

connectDataBase();

app.use(express.json());
app.use(cors());
app.use("/api/v1/", products);
app.use("/api/v1/", orders);

app.listen(process.env.PORT, () => {
  //process.env is the momery
  console.log(
    `Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
