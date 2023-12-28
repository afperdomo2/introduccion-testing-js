// Assertions o matchers
test('test: obj', () => {
  const data = { name: 'Felipe' };
  data.lastName = 'Perdomo';
  expect(data).toEqual({ name: 'Felipe', lastName: 'Perdomo' });
});

test('test: null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test: booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(true).toBeTruthy();

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('test: strings', () => {
  // Validar que exista una palabra en un string
  expect('Margaritarosa').toMatch(/rita/);
});

test('test: arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
