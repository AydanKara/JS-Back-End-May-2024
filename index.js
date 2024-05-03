const express = require("express");
const expressConfig = require("./config/express");
const routesConfig = require("./config/routes");
const databaseConfig = require("./config/database");

const PORT = 3000;

async function start() {
  const app = express();

  expressConfig(app);
  routesConfig(app);
  await databaseConfig(app);

  app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
}

start();
