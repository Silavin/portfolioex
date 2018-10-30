const mockMongoDB = require("../../utils/mockDB");
const User = require("./user");

let user;

beforeAll(async () => {
  await mockMongoDB.setUpServer();
  const username = "david";

  user = new User({ username });
});

afterAll(mockMongoDB.tearDown);

describe("User Model is Functional", () => {
  test("can be saved into the database", async () => {
    await expect(user.save()).resolves.toBe(user);
  });
});
