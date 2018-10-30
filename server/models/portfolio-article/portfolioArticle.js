const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const PortfolioArticleSchema = mongoose.Schema({
  date: { type: Date, required: [true, "the date field must be filled"] },
  title: {
    type: String,
    required: [true, "the title field must be filled"],
    unique: true
  },
  briefDescription: { type: String },
  previewPhoto: { type: String },
  fullArticle: {
    type: String,
    required: [true, "the fullArticle field must be filled"]
  },
  techTags: { type: String },
  articleUrl: {
    type: String,
    required: [true, "the articleUrl field must be filled"],
    unique: true
  },
  taskingUrl: { type: String }
});

PortfolioArticleSchema.plugin(uniqueValidator, {
  message: "The following field(s) must be unique"
});

module.exports = mongoose.model("PortfolioArticle", PortfolioArticleSchema);
