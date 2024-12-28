const Sequelize = require("sequelize");

require("dotenv").config();
const sequelize = new Sequelize('bhqwtlwhr9la38iz8smi', 'uaprqecbissc4pr4', 'vGIkdhqn5KjKTps1gaJP', {
    host: 'mysql://uaprqecbissc4pr4:vGIkdhqn5KjKTps1gaJP@bhqwt1whr9la38iz8smi-mysql.services.clever-cloud.com:3306/bhqwt1whr9la38iz8smi',
    dialect: 'mysql',
    port: 3306,
});

sequelize
  .sync()
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log("eror " + err));

module.exports = sequelize;
