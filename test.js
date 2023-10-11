const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./index");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Authentication API", () => {
  let authToken;

  it("debería registrar un usuario", (done) => {
    chai
      .request(app)
      .post("/register")
      .send({ username: "testuser", password: "testpassword" })
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });

  it("debería iniciar sesión con un usuario registrado", (done) => {
    chai
      .request(app)
      .post("/login")
      .send({ username: "testuser", password: "testpassword" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        authToken = res.body.token;
        done();
      });
  });

  it("debería cerrar sesión de un usuario autenticado", (done) => {
    chai
      .request(app)
      .post("/logout")
      .set("Authorization", `Bearer ${authToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("Authentication API", () => {
  let server;

  before((done) => {
    server = app.listen(0, () => {
      done();
    });
  });

  after((done) => {
    server.close(() => {
      done();
    });
  });
  it("debería probar todas las funcionalidades de autenticación", (done) => {
    chai
      .request(app)
      .post("/register")
      .send({ username: "testuser", password: "testpassword" })
      .end((err, res) => {
        expect(res).to.have.status(201);

        chai
          .request(app)
          .post("/login")
          .send({ username: "testuser", password: "testpassword" })
          .end((err, res) => {
            expect(res).to.have.status(200);
            authToken = res.body.token;

            chai
              .request(app)
              .post("/logout")
              .set("Authorization", `Bearer ${authToken}`)
              .end((err, res) => {
                expect(res).to.have.status(200);
                done();
              });
          });
      });
  });
});

describe("Authentication API", () => {
  it("debería probar todas las funcionalidades de autenticación", (done) => {
    chai
      .request(app)
      .post("/register")
      .send({ username: "testuser", password: "testpassword" })
      .end((err, res) => {
        expect(res).to.have.status(201);

        chai
          .request(app)
          .post("/login")
          .send({ username: "testuser", password: "testpassword" })
          .end((err, res) => {
            expect(res).to.have.status(200);
            authToken = res.body.token;

            chai
              .request(app)
              .post("/logout")
              .set("Authorization", `Bearer ${authToken}`)
              .end((err, res) => {
                expect(res).to.have.status(200);
                done();
              });
          });
      });
  });
});
