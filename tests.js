var assert = require('assert');
var f = require('./play')

describe("generate possibilities", function(){
  it("generates with 1 input", function(){
    assert.deepEqual(f.generatePossibilities('8').sort(),[["0", "5", "7", "8", "9"]]);
  });
  it("generates with 2 same inputs", function(){
    assert.deepEqual(f.generatePossibilities('11').sort(),[["1", "2", "4"], ["1", "2", "4"]]);
  });
  it("generates with 2 different inputs", function(){
    assert.deepEqual(f.generatePossibilities('12').sort(),[["1", "2", "4"], ["1", "2", "4"]]);
  });
});