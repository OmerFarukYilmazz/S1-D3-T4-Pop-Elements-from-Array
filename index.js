function removeItems(arr) {
  /* kodlar buraya */
  if (arr.length < 4) {
    return [];
  }

  arr.splice(0, 2);
  arr.pop();
  arr.pop();
  if (arr.length % 2 !== 0) {
    const mid = Math.floor(arr.length / 2);
    arr.splice(mid, 1);
  }
  return arr;
}

/* Bu satırdan sonraki satırları silmeyin! */
module.exports = removeItems;
