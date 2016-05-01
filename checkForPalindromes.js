function palindrome(str) {
  
  str=str.toLowerCase();
  
  for(var i=0;i<str.length;i++){
    str=str.replace(' ','');
    str=str.replace(',','');
    str=str.replace('.','');
    str=str.replace('/','');
    str=str.replace('_', '');
    str=str.replace('-', '');
    str= str.replace('(','');
    str= str.replace(')','');
  }
  
  var copy= str.split('').reverse().join('');
  
  if(copy==str){
    return true;
  }
  else{
   return false;
 }
}