// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// function duplicateEncode(word) {
//   let coded = [];
//   let lowerWord = word.toLowerCase().split("");
//   for (i = 0; i < lowerWord.length; i++) {
//     if (
//       lowerWord.indexOf(lowerWord[i]) !== lowerWord.lastIndexOf(lowerWord[i])
//     ) {
//       coded.push(")");
//     } else {
//       coded.push("(");
//     }
//   }
//   codedWord = coded.join("");
//   return codedWord;
// }

function duplicateEncode(word) {
  let coded = [];
  let lowerWord = word.toLowerCase().split("");
  for (i = 0; i < lowerWord.length; i++) {
    lowerWord.indexOf(lowerWord[i]) !== lowerWord.lastIndexOf(lowerWord[i])
      ? coded.push(")")
      : coded.push("(");
  }
  return coded.join("");
}

duplicateEncode("Success");
