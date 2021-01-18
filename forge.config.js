const path = require("path");
const cpy = require("cpy");

module.exports = {
  packageAfterExtract: async () => {
    console.log("On hook packageAfterExtract");
    await cpy([path.resolve(__dirname, ".webpack/renderer/*.*")], path.resolve(__dirname, ".webpack/renderer/main_window"));
    console.log("Files copied!");
  },
};
