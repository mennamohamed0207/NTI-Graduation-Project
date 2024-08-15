const mongoose = require("mongoose");
const experienceSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  org: {
    type: String,
    required: true,
  },
  fromDate: {
    type: String,
    required: true,
  },
  toDate: {
    type: String,
    required: true,
  },
  description: {
    type: Array,
    required: true,
  },
  role: {
    type: Array,
  },
  tools: {
    type: Array,
    required: true,
  },
  githubLink: {
    type: String,
  },
});
const expModel = mongoose.model("experience", experienceSchema);
module.exports = expModel;
