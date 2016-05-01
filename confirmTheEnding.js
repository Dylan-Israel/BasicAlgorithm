function end(str, target) {
  var start= str.length-(target.length);
  //Var for just comparing end of string;
  if(str.substr(start,str.length)==target){
    //Compares end of string with the target string
    return true;
  }
    else{
  return false;
    }
}