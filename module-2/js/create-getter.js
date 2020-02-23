/*!
 * Getter
 */

function createGetter(field) {
  let arr = field.split('.');

  return function(obj) {
    let newObj = obj;

    if (Object.keys(newObj).length === 0) {
      return undefined;
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === Object.entries(newObj)[0][0]) {
        newObj = Object.entries(newObj)[0][1];
      }
    }

    return newObj;
  }
}

let product = {
  category: {
    title: "Goods"
  }
};

let getter = createGetter('category.title');
alert( getter(product) ); // Goods
