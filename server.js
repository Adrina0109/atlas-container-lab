// Atlas container lab - tiny Express web service
const express = require("express");

const app = express();

// Required environment variables
const appEnv = process.env.APP_ENV;
const appPort = process.env.APP_PORT;

// APP_ENV must be provided at run time
if (!appEnv) {
  console.error("Error: APP_ENV is not set");
  process.exit(1);
}

// Single route
app.get("/", (req, res) => {
  res.status(200).send("Atlas app is running");
});

// Listen on the configured port (never hardcode)
app.listen(appPort, () => {
  console.log(`Atlas app listening on port ${appPort}`);
});
