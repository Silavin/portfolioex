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

describe("User Deletetion", () => {
  test("user is successfully deleted", async () => {
    const { username, email, password } = mockUser;
    const response = await request(app)
      .del("/api/user/delete")
      .send({ username, email, password });

    const userJson = response.body;
    expect(response.status).toBe(status.OK);
    expect(userJson.message).toBe("User has been successfully deleted");
  });
});
