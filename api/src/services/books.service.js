const MongoLib = require('../lib/mongo.lib');

/**
 * Servicio para gestionar los libros.
 */
class BooksService {
  constructor() {
    this.collection = 'books';
    this.mongoDB = new MongoLib();
  }

  /**
   * Obtiene todos los libros que coinciden con la consulta.
   * @param {Object} query - Consulta para filtrar los libros.
   * @returns {Promise<Array>} - Una promesa que resuelve en un array de libros.
   */
  getBooks(query) {
    return this.mongoDB.getAll(this.collection, query);
  }

  /**
   * Crea un nuevo libro.
   * @param {Object} newBook - Datos del nuevo libro a crear.
   * @returns {Promise<Object>} - Una promesa que resuelve en el libro creado.
   */
  createBook(newBook) {
    return this.mongoDB.create(this.collection, newBook);
  }
}

module.exports = BooksService;
