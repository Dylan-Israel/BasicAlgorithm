function titleCase(str) {
  var arrayOfStrings = str.split(" ");
   //Splits one string into amn array of strings seperated by ' '
  for (var i=0;i<arrayOfStrings.length;i++){
    var placeHolder = arrayOfStrings[i];
    //Place holder for original string
    var upLetter=  placeHolder.charAt(0).toUpperCase();
    //Selects first letter and uppercases it
    placeHolder= placeHolder.slice(1,placeHolder.length).toLowerCase();
    //Selects 2nd letter to end of the word and lower cases it
    arrayOfStrings[i] = upLetter.concat(placeHolder);
    //Concats uppercase first letter and rest of lowercase word
  }
  str = arrayOfStrings.join(' ');
  //Takes array and sets str to a signle string
  return str;
}