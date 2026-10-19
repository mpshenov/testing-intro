const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  const ids = (list) => list.map(({ id }) => id);
  // test.todo("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(ids(filterByCategory(products, 'all'))).toEqual([1,2,3,4,5,6]);
  });
  // test.todo("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(ids(filterByCategory(products, undefined))).toEqual([1, 2, 3, 4, 5, 6]);
  });
  // test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(ids(filterByCategory(products, ""))).toEqual([1, 2, 3, 4, 5, 6]);
  });
  // test.todo("'electronics' возвращает товары с ID [1, 2]");
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    expect(ids(filterByCategory(products, 'electronics'))).toEqual([1, 2]);
  });
  // test.todo("'books' возвращает товары с ID [3, 6]");
  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(ids(filterByCategory(products, "books"))).toEqual([3, 6]);
  });
  // test.todo("'home' возвращает товары с ID [4, 5]");
  test("'home' возвращает товары с ID [4, 5]", () => {
    expect(ids(filterByCategory(products, "home"))).toEqual([4, 5]);
  });
  // test.todo("'clothes' возвращает пустой массив");
  test("'clothes' возвращает пустой массив", () => {
    expect(ids(filterByCategory(products, "clothes"))).toEqual([]);
  });
  // test.todo("'toys' возвращает пустой массив");
  test("'toys' возвращает пустой массив", () => {
    expect(ids(filterByCategory(products, "toys"))).toEqual([]);
  });
  // test.todo("'sports' возвращает пустой массив");
  test("'sports' возвращает пустой массив", () => {
    expect(ids(filterByCategory(products, "sports"))).toEqual([]);
  }); 
});
