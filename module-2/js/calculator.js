/*!
 * Calculator
 */

let calculator = {
  read: () => {
    this.a = parseInt(prompt('a?', '0'));
    this.b = parseInt(prompt('b?', '0'));
  },

  sum: () => {
    return this.a + this.b;
  },

  mul: () => {
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
