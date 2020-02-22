/*!
 * Sum of object properties
 */
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {
  let arr = Object.values(obj);

  return arr.length === 0 ? 0 : arr.reduce(function(sum, current) {
    return sum + current;
  });
}

alert( sumSalaries(salaries) ); // 650
