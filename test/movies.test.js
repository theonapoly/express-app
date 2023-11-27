const request = require("supertest");
const app = require("../app");

describe("GET/api/movies", () => {
  it("Should return all movies", async () => {
    const response = await request(app).get("/api/movies");
    console.log(response);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET/api/movies/:id", () => {
  it("Should return choose id", async () => {
    const response = await request(app).get("/api/movies/1");
    console.log(response);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
  it("Should return error 404", async () => {
    const response = await request(app).get("/api/movies/0");
    expect(response.status).toEqual(404);
  });
});
