const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: 3306,
  }
);

sequelize
  .sync()
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log("eror " + err));

module.exports = sequelize;
