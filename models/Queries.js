const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  }
});
const Query = mongoose.model("Query", Schema);
Query.createIndexes();
module.exports = Query;
