const BooksService = require('./books.service');

describe('Test for Books Service', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks method', () => {
    test('Should return an array of books', async () => {
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
    });
  });
});
