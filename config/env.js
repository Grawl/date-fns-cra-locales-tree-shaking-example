const fs = require("fs");
const path = require("path");
const dotEnv = require("dotenv-safe");

const fileExists = filePath => {
  try {
    return Boolean(fs.existsSync(filePath));
  } catch (err) {
    console.error(err);
    return false;
  }
};
const init = (local = ".env", example = ".env.sample") => {
  dotEnv.config({
    allowEmptyValues: true,
    path: fileExists(path.join(process.cwd(), local)) ? local : example,
    example,
  });
};
module.exports = init;
