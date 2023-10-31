const schema = require("schm");

const figureSchema = schema({
  name: String,
  series: Number,
  move: String,
  year: Number,
  cardColor: String,
  accessories: String,
});

module.exports = figureSchema;
