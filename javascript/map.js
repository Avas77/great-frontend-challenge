function customMap(cb) {
  const newArr = [];
  for (let index = 0; index < this.length; index++) {
    // value of this will be the array that calls this method
    newArr[index] = cb(this[index], index);
  }
  return newArr;
}

Array.prototype.customMap = customMap;

const sample = [1, 2, 3];
const transformedArr = sample.customMap((num) => num * 2); //[2,4,6]
