// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
  // let lastChar = string.charAt(string.length - 1);

  // console.log(isNaN(Number(string)));

  // if (isNaN(Number(lastChar))) {
  //   console.log(string + 1);
  //   return (incrementedString = string + 1);
  // } else {
  //   let array = [...string];
  //   let newLastDigit = Number(array.slice(-1)) + 1;
  //   array[array.length - 1] = newLastDigit;
  //   console.log(array);
  //   return array.join();
  // }

  let array = [...string];
  let numberFromString = "";
  console.log(array);
  array.forEach((value) => {
    if (!isNaN(value)) {
      numberFromString += value;
      console.log(numberFromString);
    }
  });

  let newNumber = String(Number(numberFromString) + 1);

  let stringWithoutNumbers = string.slice(0, string.length - newNumber.length);
  console.log(stringWithoutNumbers + newNumber);
  return stringWithoutNumbers + newNumber;
}

incrementString("foo");
