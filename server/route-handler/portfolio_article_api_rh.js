const status = require("http-status");
const PortfolioArticle = require("../models/portfolio-article/portfolio_article");

async function displayArticle(req, res) {
  const listOfArticles = await PortfolioArticle.find();
  const sortedList = listOfArticles.sort(function(a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });
  return res.status(status.OK).json(sortedList);
}

async function postArticle(req, res) {
  const newArticle = PortfolioArticle(req.body);

  const savedArticle = await newArticle.save();
  return res.status(status.OK).json(savedArticle);
}

async function editArticle(req, res) {
  const articleDetails = req.body;
  const updatedArticle = await PortfolioArticle.findByIdAndUpdate(
    articleDetails.id,
    articleDetails
  );
  return res.status(status.OK).json(updatedArticle);
}

async function deleteArticle(req, res) {
  const articleDetails = req.body;
  await PortfolioArticle.findByIdAndDelete(articleDetails.id);
  return res.status(status.OK).json({ message: "Article has been deleted" });
}

module.exports = { displayArticle, postArticle, editArticle, deleteArticle };
