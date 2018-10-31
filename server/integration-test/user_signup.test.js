const mockMongoDB = require("../utils/mockDB");
const request = require("supertest");
const app = require("../app");
const status = require("http-status");

let mockUser = {
  username: "Testing",
  fullname: "Test full name",
  email: "test email",
  password: "test password"
};

beforeAll(mockMongoDB.setUpServer);

afterAll(mockMongoDB.tearDown);

describe("New User Signup", () => {
  test("Register new user successfully", async () => {
    const { username, fullname, email, password } = mockUser;
    const response = await request(app)
      .post("/api/user/signup")
      .send({ username, fullname, email, password });

    const userJson = response.body;

    expect(response.status).toBe(status.OK);
    expect(userJson).toBeDefined();
    expect(userJson.password).toBeUndefined();
    expect(userJson.username).toEqual(username);
    expect(userJson.fullname).toEqual(fullname);
    expect(userJson.email).toEqual(email);
  });
});
