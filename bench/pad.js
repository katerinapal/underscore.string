import { padjs as pad_padjsjs } from "../pad";
var tests = {};

tests['pad default'] = function(){
  pad_padjsjs('foo', 12);
};

tests['pad hash left'] = function(){
  pad_padjsjs('foo', 12, '#');
};

tests['pad hash right'] = function(){
  pad_padjsjs('foo', 12, '#', 'right');
};

tests['pad hash both'] = function(){
  pad_padjsjs('foo', 12, '#', 'both');
};

tests['pad hash both longPad'] = function(){
  pad_padjsjs('foo', 12, 'f00f00f00', 'both');
};

var padjs;

padjs = {
  tests: tests
};
