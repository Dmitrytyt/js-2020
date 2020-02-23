/*!
 * Select the cells on the diagonal
 */

let table = document.body.firstElementChild;
let counter = -1;

outer: for (let tr of table.rows) {
  counter++;

  for (let td of tr.cells) {
    if (td.cellIndex === counter) {
      td.style.background = 'red';
      continue outer;
    }
  }
}
