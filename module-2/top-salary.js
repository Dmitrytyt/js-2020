/*!
 * Maximum wage
 */

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(obj) {
  let arr = Object.entries(obj);
  let maxNum = 0;
  let topName = null;

  arr.forEach((item) => {
    let [name, num] = item;

    if (num > maxNum) {
      maxNum = num;
      topName = name;
    }
  });

  return topName;
}

alert( topSalary(salaries) );
