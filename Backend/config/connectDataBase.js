const mongoose = require("mongoose");

const connectDataBase = () => {
  mongoose.connect(process.env.DB_URL).then((con) => {
    console.log("mongoDB is connected in host :" + con.connection.host);
  });
};

module.exports = connectDataBase;
