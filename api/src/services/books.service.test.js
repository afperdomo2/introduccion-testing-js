const BooksService = require('./books.service');

/**
 * @description Constante que representa una lista de libros falsos.
 * @type {Array<Object>}
 */
const fakeBooks = [
  { _id: 1, name: 'Clean Code' },
  { _id: 2, name: 'The pragmatic programmer' },
  { _id: 3, name: 'Web Development with Node.js' },
  { _id: 4, name: 'The art of computer programming' },
];

/**
 * Stub de MongoLib utilizado para pruebas.
 * @typedef {Object} MongoLibStub
 * @property {Function} getAll - Función que devuelve una copia de los libros falsos.
 * @property {Function} create - Función vacía utilizada para simular la creación de un libro.
 */
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

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
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for Books Service', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    // Limpiar todos los mocks después de cada prueba
    jest.clearAllMocks();
  });

  describe('Test for getBooks method', () => {
    test('Should return an array of books', async () => {
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(4);
      expect(books[0].name).toEqual('Clean Code');
    });

    test("should return a first book's name", async () => {
      const books = await service.getBooks({});
      expect(books[0].name).toEqual('Clean Code');
    });
  });
});
