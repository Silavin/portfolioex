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
beforeAll(() => {
  const user = new User();
  const { username, fullname, email, password } = mockUser;

  user.username = username;
  user.fullname = fullname;
  user.email = email;
  user.setPassword(password);

  user.save();
});
afterAll(mockMongoDB.tearDown);

describe("User Authentication", () => {
  test("User login successful", async () => {
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
    expect(userJson.email).toEqual(email);
    expect(userJson.token).toBeDefined();
    expect(userJson.token).not.toBeNull();
  });
});
