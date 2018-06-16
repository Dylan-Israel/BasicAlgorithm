function findLongestWord(str) {
  var arrayOfStrings = str.split(" ");
  var longestString = '';

  for (var i = 0; i < arrayOfStrings.length; i++) {
    if (longestString.length < arrayOfStrings[i].length) {
      longestString = arrayOfStrings[i];
    }
  }
  str = longestString;
  return str.length;
}