const request = require('supertest');

const createApp = require('../../src/app');

describe('Test to hello endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3900);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /', () => {
    test("should return 'Hello World!'", async () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
