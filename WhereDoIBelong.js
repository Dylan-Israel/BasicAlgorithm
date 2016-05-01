function where(arr, num) {
  // Find my place in this sorted array.
  var count= 0;
  //Counter variable for results
  for(var i=0;i<arr.length;i++){
    if(arr[i]-num<0){
      //If arr value - number returns negative it is a smaller number
      count=count+1;
      
    }
  }
  return count;
}