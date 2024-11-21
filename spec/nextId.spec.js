const createNextIdFunction = require('../src/createNextIdFunction');

describe('Функция nextId:', () => {
  const count = 10;

  let nextId;
  let identifiers;
  beforeEach(() => {
    nextId = createNextIdFunction();
    identifiers = new Set();

    for (let i = 0; i < count; i += 1) {
      identifiers.add(nextId());
    }
  });

  it('возвращает уникальные значения', () => {
    expect(identifiers.size).toBe(count);
  });

  it('возвращает целые числа', () => {
    identifiers.forEach((id) => expect(Number.isInteger(id)).toBe(true));
  });

  it('возвращает положительные числа', () => {
    identifiers.forEach((id) => expect(id).toBeGreaterThan(0));
  });
});
