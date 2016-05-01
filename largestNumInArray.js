function largestOfFour(arr) {
var largestArray= [];
  //Create an empty array to fill later
  for (var i=0;i<arr.length;i++){
    var largestNumber=0;
    //Placeholder to find largets number
    for(var j=0;j<arr.length;j++){
      if(largestNumber<arr[i][j]){
        largestNumber=arr[i][j];
      }
    }
    largestArray.push(largestNumber);
    //Add largest number to new array
  }
  
  return largestArray;
}