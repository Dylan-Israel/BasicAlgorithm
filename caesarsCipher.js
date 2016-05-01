function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  //Create an alphabet character array that goes past Z by 13 letters starting with a
  var alphabet= ["A","B","C","D","E","F","G","H", "I","J","K","L","M", "N","O","P","Q","R", "S","T","U","V","W","X","Y","Z", "A","B","C","D","E","F", "G", "H", "I","J", "K", "L","M"];
  //Itterate through inputted string array
  for(var i=0;i<codeArr.length;i++){
    //If current value isn't in alphabet
    if(alphabet.indexOf(codeArr[i])===-1){
      //Add that value to the decodedArr array
      decodedArr.push(codeArr[i]);
    }
      else{
        //Itterate through alphabet
        for(var j=0;j<alphabet.length;j++){
          //If current vaue in array is equal to alphabet
          if(codeArr[i]===alphabet[j]){
            //Add the value to the decodedArr + 13 index shifts in alphabet
            decodedArr.push(alphabet[j+13]);
          }
        }
        
      }
  }
  
  // Only change code above this line
  return decodedArr.join(""); // Array to String
}
