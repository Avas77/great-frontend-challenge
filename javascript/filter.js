function customFilter(cb) {
  const newArr = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index])) {
      newArr.push(this[index]);
    }
  }
  return newArr;
}

Array.prototype.customFilter = customFilter;

const sample = [
  "word",
  "raju",
  "destroyer",
  "thanos",
  "manirajan",
  "leuscopioc",
];
const transformedArr = sample.customFilter((word) => word.length > 6);
console.log(transformedArr);
