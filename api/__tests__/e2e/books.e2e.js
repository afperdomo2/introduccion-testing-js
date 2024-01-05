const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../../src/app');
const { config } = require('../../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3900);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list of books', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'The Lord of the Rings',
          year: 1954,
          author: 'J. R. R. Tolkien',
        },
        { name: 'The Hobbit', year: 1937, author: 'J. R. R. Tolkien' },
        {
          name: "Harry Potter and the Philosopher's Stone",
          year: 1997,
          author: 'J. K. Rowling',
        },
      ]);
      console.log('seedData', seedData);

      // Act
      const response = await request(app).get('/api/v1/books');

      // Assert
      // Verifica que la respuesta tenga un estado HTTP 200
      expect(response.status).toEqual(200);
      // Verifica que la longitud del cuerpo sea igual a la longitud de los libros falsos generados
      expect(response.body.length).toEqual(seedData.insertedCount);
    });
  });
});
