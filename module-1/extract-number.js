/*!
 * Extract number
 */

function extractCurrencyValue(str) {
  return parseInt(str.replace(/\$/g, ""));
}

alert(extractCurrencyValue('$120') === 120 ); // true
