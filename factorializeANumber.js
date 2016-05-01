function factorialize(num) {
  var count=num;
  
  if(count===0){
  return 1;
  }
  else{
  for(var i=1;i<count;i++){
    num=num*i;
  }
  }
  return num;
}