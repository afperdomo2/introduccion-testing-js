const { randUuid, randProductName, randNumber } = require('@ngneat/falso');

const generateOneBook = () => ({
  _id: randUuid(),
  name: randProductName(),
  price: randNumber(),
});

const generateManyBooks = (quantity = 10) => {
  const books = [];
  for (let i = 0; i < quantity; i += 1) {
    books.push(generateOneBook());
  }
  return [...books];
};

module.exports = { generateOneBook, generateManyBooks };
