function reverseString(str) {
   str = str.split("");
  //Split the string into an array of character for each space of ""
   str = str.reverse();
  //Use array function reverse to reverse the values of index first to last and vice versa
   str = str.join([separator = '']);
  //Reset to a string using array's join funciton and adding the seperator ""
  return str;
}

reverseString("hello");

reverseString("Greetings from Earth");