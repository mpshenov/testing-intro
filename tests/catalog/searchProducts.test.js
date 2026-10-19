const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  const ids = (obj) => {
    return obj.map(({id}) => id)
  }
  // test.todo("'Наушники' возвращает товар с ID 1");
  test("'Наушники' возвращает товар с ID 1", () => {
    expect(ids(searchProducts(products, 'Наушники'))).toEqual([1])
  });
  // test.todo("'Чистый код' возвращает товар с ID 6");
  test("'Чистый код' возвращает товар с ID 6", () => {
    expect(ids(searchProducts(products, 'Чистый код'))).toEqual([6])
  });
  // test.todo("'Настольная лампа' возвращает товар с ID 4");
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    expect(ids(searchProducts(products, 'Настольная лампа'))).toEqual([4])
  });
  // test.todo("'javascript' возвращает товар с ID 3");
  test("'javascript' возвращает товар с ID 3", () => {
    expect(ids(searchProducts(products, 'javascript'))).toEqual([3])
  });
  // test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    expect(ids(searchProducts(products, 'ЧЕХОЛ'))).toEqual([5])
  });
  // test.todo("'наушники' возвращает товар с ID 1");
  test("'наушники' возвращает товар с ID 1", () => {
    expect(ids(searchProducts(products, 'наушники'))).toEqual([1])
  });
  // test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(ids(searchProducts(products, ''))).toEqual([1, 2, 3, 4, 5, 6])
  });
  // test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(ids(searchProducts(products, '   '))).toEqual([1, 2, 3, 4, 5, 6])
  });
  // test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(ids(searchProducts(products, '\t\n'))).toEqual([1, 2, 3, 4, 5, 6])
  });
});
