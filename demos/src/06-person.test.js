const Person = require('./06-person');

/**
 * Regla AAA: Pasos principales de una prueba unitaria
 *
 * Arrange / Given: Preparar el escenario de la prueba
 * Act / When: Ejecutar la prueba (llamar al método a probar)
 * Assert / Then: Verificar que el resultado es el esperado
 */
describe('Person tests', () => {
  let person;

  // Arrange
  beforeEach(() => {
    person = new Person('Juan', 45, 1.7);
  });

  test('Should return down', () => {
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('Should return normal', () => {
    // Arrange
    person.weight = 59;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('normal');
  });
});
