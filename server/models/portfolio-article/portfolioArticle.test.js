const mockMongoDB = require("../../utils/mockDB");
const PortfolioArticle = require("./portfolioArticle");

let article;
const samplePortfolioArticle = {
  date: "20 December 2016",
  title: "My First Website Ever",
  briefDescription: "My first step ever taken is this proud website of mine.",
  previewPhoto: "123",
  fullArticle: "asd",
  techTags: "sample",
  articleUrl: "http://www.testing.com",
  taskingUrl: "http://www.divinedaolibrary.com"
};

beforeAll(async () => {
  await mockMongoDB.setUpServer();

  article = new PortfolioArticle(samplePortfolioArticle);
});
afterAll(mockMongoDB.tearDown);

describe("Portfolio is Savable", () => {
  test("should be able to save file", async () => {
    await expect(article.save()).resolves.toEqual(article);
  });
});

describe("Portfolio has Required Fields", () => {
  const {
    date,
    title,
    briefDescription,
    previewPhoto,
    fullArticle,
    techTags,
    articleUrl,
    taskingUrl
  } = samplePortfolioArticle;
  test("date is requied", async () => {
    const article2 = new PortfolioArticle({
      title,
      briefDescription,
      previewPhoto,
      fullArticle,
      techTags,
      articleUrl,
      taskingUrl
    });

    await expect(article2.save()).rejects.toThrow(
      "the date field must be filled"
    );
  });
  test("title is requied", async () => {
    const article2 = new PortfolioArticle({
      date,
      briefDescription,
      previewPhoto,
      fullArticle,
      techTags,
      articleUrl,
      taskingUrl
    });

    await expect(article2.save()).rejects.toThrow(
      "the title field must be filled"
    );
  });
  test("fullArticle is requied", async () => {
    const article2 = new PortfolioArticle({
      date,
      title,
      briefDescription,
      previewPhoto,
      techTags,
      articleUrl,
      taskingUrl
    });

    await expect(article2.save()).rejects.toThrow(
      "the fullArticle field must be filled"
    );
  });
  test("articleUrl is requied", async () => {
    const article2 = new PortfolioArticle({
      date,
      title,
      briefDescription,
      previewPhoto,
      techTags,
      taskingUrl
    });

    await expect(article2.save()).rejects.toThrow(
      "the articleUrl field must be filled"
    );
  });
});

describe("Portfolio has Unique Fields", () => {
  beforeAll(async () => {
    await article.save();
  });
  const { title, articleUrl } = samplePortfolioArticle;

  const samplePortfolioArticle2 = {
    date: "21 December 2017",
    title: "My Second Website Ever",
    briefDescription: "Sample",
    previewPhoto: "Sample",
    fullArticle: "sample",
    techTags: "sample",
    articleUrl: "http://www.bestSample.com",
    taskingUrl: "http://www.bestSample.co"
  };
  test("title should be unique", async () => {
    samplePortfolioArticle2.title = title;
    const article2 = new PortfolioArticle(samplePortfolioArticle2);

    await expect(article2.save()).rejects.toThrow(
      "title: The following field(s) must be unique"
    );
  });
  test("articleUrl should be unique", async () => {
    samplePortfolioArticle2.articleUrl = articleUrl;
    const article2 = new PortfolioArticle(samplePortfolioArticle2);

    await expect(article2.save()).rejects.toThrow(
      "title: The following field(s) must be unique"
    );
  });
});
