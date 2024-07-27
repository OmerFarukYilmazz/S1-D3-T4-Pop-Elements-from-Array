const removeItems = require('./index.js'); // Fonksiyonumuzu import ediyoruz

describe('removeItems fonksiyonu testleri', () => {
  test('Normal değerlerle doğru sonucu döndürüyor mu?', () => {
    expect(removeItems([1, 5, 9, 12, 17, 14, 21])).toEqual([9, 17]);
    expect(
      removeItems([
        'Erdem',
        'Hatice',
        'Fatih',
        'Ayşe',
        'Alp',
        'Mehmet',
        'Melis',
        'Gamze',
      ])
    ).toEqual(['Fatih', 'Ayşe', 'Alp', 'Mehmet']);
  });

  test('Boş veya yetersiz elemanlı array boş array döndürüyor mu?', () => {
    expect(removeItems([])).toEqual([]);
    expect(removeItems([1])).toEqual([]);
    expect(removeItems([1, 2])).toEqual([]);
    expect(removeItems([1, 2, 3, 4])).toEqual([]);
  });

  test('Tek sayıda eleman içeren arrayde ortadaki eleman çıkarılıyor mu?', () => {
    expect(removeItems([1, 2, 3, 4, 5, 6, 7])).toEqual([3, 5]);
  });

  test('Çift sayıda eleman içeren arrayde ortadaki elemanlar korunuyor mu?', () => {
    expect(removeItems([1, 2, 3, 4, 5, 6])).toEqual([3, 4]);
  });
});