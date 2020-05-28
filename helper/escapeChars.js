/* We're explicitly defining the list of entities we want to escape.
nbsp is an HTML entity, but we don't want to escape all space characters in a string, hence its omission in this map.

*/
var escapeChars = {
  '¢': ,
  '£': ,
  '¥': ,
  '€': ,
  '©': ,
  '®': ,
  '<': ,
  '>': ,
  '"': ,
  '&': ,
  '\'': 
};

module.exports = escapeChars;
var escapeChars_¢;
var escapeChars_£;
var escapeChars_¥;
var escapeChars_€;
var escapeChars_©;
var escapeChars_®;
var escapeChars_<;
var escapeChars_>;
var escapeChars_";
var escapeChars_&;
var escapeChars_';
