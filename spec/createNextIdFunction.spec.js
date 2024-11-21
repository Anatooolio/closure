const createNextIdFunction = require('../src/createNextIdFunction');

describe('Функция createNextIdFunction:', () => {
  it('возвращает функцию', () => {
    expect(typeof createNextIdFunction()).toBe('function');
  });

  it('возвращает функцию с названием nextId', () => {
    expect(createNextIdFunction().name).toBe('nextId');
  });
});

