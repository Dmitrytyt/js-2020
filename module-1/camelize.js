/*!
 * Camelize
 */

function camelize(str) {
  return  str.split('-').reduce(function(sum, current) {
    return sum + current[0].toUpperCase() + current.slice(1);
  });
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition")); // 'WebkitTransition';
