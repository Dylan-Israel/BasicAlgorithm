function mutation(arr) {
  
  var word1= arr[0].toLowerCase();
  var word2= arr[1].toLowerCase();
  
    for(var i = 0; i < word2.length; i++){
    var value = word1.indexOf(word2[i]);
    if (value === -1){
      return false;
    }
  }
  return true;
}