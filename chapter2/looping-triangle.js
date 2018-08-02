/*
  Write a loop that makes seven calls to console.log to output the following triangle:

  #
  ##
  ###
  ####
  #####
  ######
  #######
  It may be useful to know that you can find the length of a string by writing .length after it.
*/

// Solution

let line = "#"

for (var x=0; x < 7; x++) {
  console.log(line);
  line += "#";
}
