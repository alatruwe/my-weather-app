const app = require("../server/app");

describe("App", () => {
  it("GET / responds with 200, response not empty", () => {
    return supertest(app)
      .get("/api")
      .query({ zipcode: 91356 })
      .expect(200)
      .then((res) => {
        // make sure you get an array
        expect(res.body).to.be.an("array");
        // array must not be empty
        expect(res.body).to.have.lengthOf.at.least(1);
      });
  });

  it("GET / responds with 400 if zipcode does not exists", () => {
    return supertest(app)
      .get("/api")
      .query({ zipcode: 12345 })
      .expect(400, { error: `Zipcode doesn't exist` });
  });
});
