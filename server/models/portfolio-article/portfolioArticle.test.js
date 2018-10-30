const mockMongoDB = require("../../utils/mockDB");
const portfolioArticle = require("./portfolioArticle");

beforeAll(async () => {
  await mockMongoDB.setUpServer;
  const samplePortfolio = {
    date: "20 December 2016",
    title: "My First Website Ever",
    briefDescription: "My first step ever taken is this proud website of mine.",
    previewPhoto: "123",
    fullArticle: "asd",
    button: ["WORDPRESS", "CPANEL"],
    siteUrl: "http://www.divinedaolibrary.com"
  };
});
afterAll(mockMongoDB.tearDown);

describe("Portfolio is Savable", () => {
  test("should be able to save file", () => {});
});
