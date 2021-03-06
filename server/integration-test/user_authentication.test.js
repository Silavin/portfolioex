const mockMongoDB = require("../utils/mockDB");
const request = require("supertest");
const app = require("../app");
const status = require("http-status");
const User = require("../models/user/user");

let mockUser = {
  username: "Testing",
  fullname: "Test full name",
  email: "test email",
  password: "test password"
};

beforeAll(mockMongoDB.setUpServer);
beforeAll(async () => {
  const user = new User();
  const { username, fullname, email, password } = mockUser;

  user.username = username;
  user.fullname = fullname;
  user.email = email;
  user.setPassword(password);

  await user.save();
});
afterAll(mockMongoDB.tearDown);

describe("User Authentication", () => {
  test("User login successful using username", async () => {
    const { username, email, password } = mockUser;

    const response = await request(app)
      .post("/api/user/login")
      .send({
        username,
        email,
        password
      });

    const userJson = response.body;
    expect(response.statusCode).toBe(status.OK);
    expect(userJson).toBeDefined();
    expect(userJson.username).toEqual(username);
    const jwtTokenCookie = [expect.stringMatching(/jwt/)];
    expect(response.headers["set-cookie"]).toEqual(
      expect.arrayContaining(jwtTokenCookie)
    );
  });
  test("User login successful using email", async () => {
    const { email, password } = mockUser;

    const response = await request(app)
      .post("/api/user/login")
      .send({
        email,
        password
      });

    const userJson = response.body;
    expect(response.statusCode).toBe(status.OK);
    expect(userJson).toBeDefined();
    expect(userJson.email).toEqual(email);
    const jwtTokenCookie = [expect.stringMatching(/jwt/)];
    expect(response.headers["set-cookie"]).toEqual(
      expect.arrayContaining(jwtTokenCookie)
    );
  });
});
