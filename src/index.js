
exports.min = function min (array) {
  if (array === undefined||array.length === 0 ) {
    return 0;
  }
  let min = array[0]
  array.forEach((item)=>{
    if (min > item) {
      min = item;
    }
  })
  return min;
}

exports.max = function max (array) {
  if (array === undefined||array.length === 0 ) {
    return 0;
  }
  let max = array[0]
  array.forEach((item)=>{
    if (max < item) {
      max = item;
    }
  })
  return max;
}

exports.avg = function avg (array) {
  if (array === undefined||array.length === 0 ) {
    return 0;
  }
let avg ;
let newArr = array.reduce((prev, curr)=> prev+ curr)
 return avg = newArr/array.length
}
