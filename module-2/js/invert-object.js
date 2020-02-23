/*!
 * Invert object
 */

function invertObject(obj) {
  let newObj = {};

  for (let key in obj) {
    newObj[obj[key]] = key;
  }

  return newObj;
}

const obj = {
  foo: 'bar'
};

console.log(invertObject(obj)); // {bar: 'foo'}
