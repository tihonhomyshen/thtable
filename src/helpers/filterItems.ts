export function filterItems(items, { minPrice1, maxPrice1, minPrice2, maxPrice2 }) {
  return items.filter(item => {
      const price1 = item.price1;
      const price2 = item.price2;

      // Проверка price1
      const matchPrice1 =
          (minPrice1 === '' || price1 >= minPrice1) &&
          (maxPrice1 === '' || price1 <= maxPrice1);

      // Проверка price2
      const matchPrice2 =
          (minPrice2 === '' || price2 >= minPrice2) &&
          (maxPrice2 === '' || price2 <= maxPrice2);

      // Возвращаем true, если оба условия выполнены
      return matchPrice1 && matchPrice2;
  });
}