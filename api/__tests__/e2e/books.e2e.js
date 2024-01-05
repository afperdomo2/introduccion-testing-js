const mockGetAll = jest.fn(); // Toca importarla acá arriba para que no genere error

const request = require('supertest');

const createApp = require('../../src/app');
const { generateManyBooks } = require('../../src/fakes/book.fake');

jest.mock('../../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3900);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('should return a list of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      const response = await request(app).get('/api/v1/books');

      // Assert
      // Verifica que la respuesta tenga un estado HTTP 200
      expect(response.status).toEqual(200);
      // Verifica que el cuerpo de la respuesta sea igual a los libros falsos generados
      expect(response.body).toEqual(fakeBooks);
      // Verifica que la longitud del cuerpo sea igual a la longitud de los libros falsos generados
      expect(response.body.length).toEqual(fakeBooks.length);
      // Verifica que la función mockGetAll haya sido llamada una vez
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
