const mockMongoDB = require("../../utils/mockDB");
const User = require("./user");

let user;
let mockUser = {
  username: "Testing",
  fullname: "Test full name",
  email: "test email"
};

beforeAll(async () => {
  await mockMongoDB.setUpServer();

  user = new User(mockUser);
});

afterAll(mockMongoDB.tearDown);

describe("User Model is Functional", () => {
  test("can be saved into the database", async () => {
    await expect(user.save()).resolves.toBe(user);
  });
});

describe("User Model has Required Fields", () => {
  const { username, fullname, email } = mockUser;
  test("username is required", async () => {
    const mockUser2 = { fullname, email };
    const user2 = new User(mockUser2);

    await expect(user2.save()).rejects.toThrow(
      "field username is requied to be filled"
    );
  });
  test("fullname is required", async () => {
    const mockUser2 = { username, email };
    const user2 = new User(mockUser2);

    await expect(user2.save()).rejects.toThrow(
      "field fullname is requied to be filled"
    );
  });

  test("email is required", async () => {
    const mockUser2 = { username, fullname };
    const user2 = new User(mockUser2);

    await expect(user2.save()).rejects.toThrow(
      "field email is requied to be filled"
    );
  });
});

describe("User Model has Unique Values", () => {
  beforeAll(async () => {
    user.save();
  });
  const mockUser2 = {
    username: "test2",
    fullname: "testing 2",
    email: "test2@email.com"
  };

  const { username, fullname, email } = mockUser;

  test("username is unique", async () => {
    mockUser2.username = username;
    const user2 = new User(mockUser2);
    await expect(user2.save()).rejects.toThrow(
      "username: the following fields must be unique"
    );
  });
  test("fullname is unique", async () => {
    mockUser2.fullname = fullname;
    const user2 = new User(mockUser2);
    await expect(user2.save()).rejects.toThrow(
      "fullname: the following fields must be unique"
    );
  });
  test("email is unique", async () => {
    mockUser2.email = email;
    const user2 = new User(mockUser2);
    await expect(user2.save()).rejects.toThrow(
      "email: the following fields must be unique"
    );
  });
});
