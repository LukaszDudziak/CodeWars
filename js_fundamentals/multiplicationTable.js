multiplicationTable = function (size) {
  let returnArray = new Array();
  for (i = 1; i <= size; i++) {
    let newArray = new Array();
    for (j = 1; j <= size; j++) {
      newArray.push(i * j);
    }
    returnArray.push(newArray);
  }
  return returnArray;
};

console.log(multiplicationTable(3));
