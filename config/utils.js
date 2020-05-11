const fs = require("fs");
const ejs = require("ejs");

/**
 * @param {string} filePath
 * @returns {string}
 */
const getFileContent = filePath => {
  return fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });
};
/**
 * @param {string} path
 * @param {object} variables
 * @returns {string}
 */
const template = (path, variables) => {
  return ejs.render(getFileContent(path), variables);
};
module.exports = {
  template,
};
