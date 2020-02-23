/*!
 * Uniq
 */

function uniq(arr) {
  let plenty = new Set();
  let newArr = [];

  for (let item of arr) {
    plenty.add(item);
  }

  plenty.forEach((value, valueAgain, plenty) => {
    newArr.push(value);
  });

  return newArr;
}

uniq([1, 2, 2, 3, 1, 4]); // [1, 2, 3, 4]
alert(uniq([1, 2, 2, 3, 1, 4]));
