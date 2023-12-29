const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

/**
 * Clase que representa una biblioteca para interactuar con MongoDB.
 */
class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = DB_NAME;
  }

  /**
   * Conecta a la base de datos de MongoDB.
   * @returns {Promise} Una promesa que se resuelve con la conexión a la base de datos.
   */
  async connect() {
    if (!MongoLib.connection) {
      await this.client.connect();
      MongoLib.connection = this.client.db(this.dbName);
      return MongoLib.connection;
    }
    return MongoLib.connection;
  }

  /**
   * Obtiene todos los documentos de una colección que coinciden con una consulta.
   * @param {string} collection - El nombre de la colección.
   * @param {object} query - La consulta para filtrar los documentos.
   * @returns {Promise} Una promesa que se resuelve con los documentos encontrados.
   */
  async getAll(collection, query) {
    const db = await this.connect();
    return db.collection(collection).find(query).toArray();
  }

  /**
   * Obtiene un documento de una colección por su ID.
   * @param {string} collection - El nombre de la colección.
   * @param {string} id - El ID del documento.
   * @returns {Promise} Una promesa que se resuelve con el documento encontrado.
   */
  async get(collection, id) {
    const db = await this.connect();
    return db.collection(collection).findOne({ _id: ObjectId(id) });
  }

  /**
   * Crea un nuevo documento en una colección.
   * @param {string} collection - El nombre de la colección.
   * @param {object} data - Los datos del nuevo documento.
   * @returns {Promise} Una promesa que se resuelve con el documento creado.
   */
  async create(collection, data) {
    const db = await this.connect();
    const rta = await db.collection(collection).insertOne(data);
    return this.get(collection, rta.insertedId);
  }

  /**
   * Actualiza un documento en una colección por su ID.
   * @param {string} collection - El nombre de la colección.
   * @param {string} id - El ID del documento a actualizar.
   * @param {object} data - Los datos actualizados del documento.
   * @returns {Promise} Una promesa que se resuelve con el documento actualizado.
   */
  async update(collection, id, data) {
    const db = await this.connect();
    await db
      .collection(collection)
      .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
    return this.get(collection, id);
  }

  /**
   * Elimina un documento de una colección por su ID.
   * @param {string} collection - El nombre de la colección.
   * @param {string} id - El ID del documento a eliminar.
   * @returns {Promise} Una promesa que se resuelve con el resultado de la eliminación.
   */
  async delete(collection, id) {
    const db = await this.connect();
    return db.collection(collection).deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = MongoLib;
