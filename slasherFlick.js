function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if(howMany<1){
   return arr; 
  }
  else{
  arr = arr.splice(howMany,1);
  return arr;
  }
}