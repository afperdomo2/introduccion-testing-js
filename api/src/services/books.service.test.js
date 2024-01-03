const BooksService = require('./books.service');
const { generateManyBooks } = require('../fakes/book.fake');

const mockGetAll = jest.fn();

/**
 * Stub de MongoLib utilizado para pruebas.
 * @typedef {Object} MongoLibStub
 * @property {Function} getAll - Función que devuelve una copia de los libros falsos.
 * @property {Function} create - Función vacía utilizada para simular la creación de un libro.
 */
// const MongoLibStub = {
//   getAll: mockGetAll,
//   create: () => {},
// };

/**
 * @description Mockear el módulo '../lib/mongo.lib' para simular su implementación.
 * La función jest.mock() se utiliza para reemplazar un módulo con una versión simulada o "mockeada"
 *
 * En este caso, se está mockeando el módulo '../lib/mongo.lib' para que devuelva una implementación
 * simulada (MongoLibStub).
 *
 * Esto permite simular el comportamiento de la librería de MongoDB y probar el servicio de libros
 * de forma aislada.
 */
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for Books Service', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    // Limpiar todos los mocks después de cada prueba
    jest.clearAllMocks();
  });

  describe('Test for getBooks method', () => {
    test('Should return an array of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(50);
      console.log(fakeBooks);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.table(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test("should return a first book's name", async () => {
      // Arrange
      const fakeBooks = generateManyBooks(10);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.table(books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
  });
});
