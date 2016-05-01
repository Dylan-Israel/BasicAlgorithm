function repeat(str, num) {
  // repeat after me
  var holderArray=[];
  for(var i=0;i<num;i++){
    holderArray.push(str);
  }
  str= holderArray.join('');
  return str;
}