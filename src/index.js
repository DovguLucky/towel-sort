
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let swich = 'on';
  result = [];
if(typeof matrix === typeof []) {
  matrix.forEach(el => {
    if (swich === 'on') {
      el.forEach(e => {
        result.push(e);
        swich = 'rev';
      })
    } else {
      el.reverse().forEach(e => {
        result.push(e);
        swich = 'on'
      })
    }
  })
}
  return result;
}
