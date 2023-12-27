const { sum, multiply, subtract, divide } = require("./02-math");

test("adds 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("multiply 2 * 3 should be 6", () => {
  const rta = multiply(2, 3);
  expect(rta).toBe(6);
});

test("subtract 3 - 1 should be 2", () => {
  const rta = subtract(3, 1);
  expect(rta).toBe(2);
});

test("divide", () => {
  const rta = divide(6, 2);
  expect(rta).toBe(3);

  const rta2 = divide(6, 0);
  expect(rta2).toBe(Infinity);

  const rta3 = divide(0, 0);
  expect(rta3).toBe(NaN);

  const rta4 = divide(0, 6);
  expect(rta4).toBe(0);

  const rta5 = divide(6, 6);
  expect(rta5).toBe(1);

  const rta6 = divide(6, -6);
  expect(rta6).toBe(-1);
});
