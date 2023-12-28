/**
 * La función "describe" se utiliza en los frameworks de
 * pruebas como Jest o Mocha para agrupar y organizar las
 * pruebas en bloques lógicos.
 */
describe('Group 1', () => {
  // Se ejecuta antes de todas las pruebas
  beforeAll(() => {
    console.log('🚀Mount database');
  });

  // Se ejecuta después de todas las pruebas
  afterAll(() => {
    console.log('🚀Unmount database');
  });

  // Se ejecuta antes de cada prueba
  beforeEach(() => {
    console.log('📦get data');
  });

  // Se ejecuta después de cada prueba
  afterEach(() => {
    console.log('🧹Clean data');
  });

  test('Case 1', () => {
    console.log('✅Case 1');
    expect(true).toBe(true);
  });
  test('Case 2', () => {
    console.log('✅Case 2');
    expect(true).toBe(true);
  });

  // Un grupo de pruebas dentro de otro grupo de pruebas
  describe('Group 2', () => {
    // Se ejecuta antes de todas las pruebas de este grupo
    beforeAll(() => {
      console.log('🚀Update');
    });

    test('Case 3', () => {
      console.log('✅Case 3');
      expect(true).toBe(true);
    });
    test('Case 4', () => {
      console.log('✅Case 4');
      expect(true).toBe(true);
    });
  });
});
