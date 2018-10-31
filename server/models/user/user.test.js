const mockMongoDB = require("../../utils/mockDB");
const User = require("./user");

let user;
let mockUser = {
  username: "Testing",
  fullname: "Test full name",
  email: "test email",
  passwordSalt: "salty",
  passwordHash: "hash"
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
  const { username, fullname, email, passwordSalt, passwordHash } = mockUser;
  test("username is required", async () => {
    const mockUser2 = {
      fullname,
      email,
      passwordSalt,
      passwordHash
    };
    const user2 = new User(mockUser2);

    await expect(user2.save()).rejects.toThrow(
      "field username is requied to be filled"
    );
  });
  test("fullname is required", async () => {
    const mockUser2 = { username, email, passwordSalt, passwordHash };
    const user2 = new User(mockUser2);

    await expect(user2.save()).rejects.toThrow(
      "field fullname is requied to be filled"
    );
  });

  test("email is required", async () => {
    const mockUser2 = { username, fullname, passwordSalt, passwordHash };
    const user2 = new User(mockUser2);

    await expect(user2.save()).rejects.toThrow(
      "field email is requied to be filled"
    );
  });
  test("passwordSalt is required", async () => {
    const mockUser2 = { username, fullname, email, passwordHash };
    const user2 = new User(mockUser2);

    await expect(user2.save()).rejects.toThrow(
      "field passwordSalt is requied to be filled"
    );
  });
  test("passwordHash is required", async () => {
    const mockUser2 = { username, fullname, email, passwordSalt };
    const user2 = new User(mockUser2);

    await expect(user2.save()).rejects.toThrow(
      "field passwordHash is requied to be filled"
    );
  });
});

describe("User Model has Unique Values", () => {
  beforeEach(async () => {
    user.save();
  });
  const mockUser2 = {
    username: "test2",
    fullname: "testing 2",
    email: "test2@email.com"
  };

  const { username, fullname, email, passwordSalt } = mockUser;

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
  test("passwordSalt is unique", async () => {
    mockUser2.passwordSalt = passwordSalt;
    const user2 = new User(mockUser2);

    await expect(user2.save()).rejects.toThrow(
      "passwordSalt: the following fields must be unique"
    );
  });
});

describe("Setting and Validation of Password", () => {
  const { username, fullname, email } = mockUser;
  const user2 = new User({ username, fullname, email });
  const password = "passwordTest";

  test("able to set passwordHash and passwordSalt", () => {
    expect(user2.passwordSalt).toBeUndefined();
    expect(user2.passwordHash).toBeUndefined();

    user2.setPassword(password);

    expect(user2.passwordSalt).toBeDefined();
    expect(user2.passwordSalt).not.toBeNull();
    expect(user2.passwordHash).toBeDefined();
    expect(user2.passwordHash).not.toBeNull();
  });

  it("should be able to verify user password afterwards", () => {
    expect(user2.validPassword(password)).toBeTruthy();
  });
});

describe("JWT Tokens", () => {
  beforeEach(async () => {
    await user.save();
  });

  test("JWT token can be generated and verified", () => {
    const token = user.generateJWT();
    expect(user.verifyJWT(token)).toBeTruthy();
  });

  test("invalid JWT token", () => {
    expect(user.verifyJWT("False Token")).toBeFalsy();
  });
});
