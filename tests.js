var assert = require('assert');
var f = require('./play');

describe("generate possibilities", function(){
  it("generates with 1 input", function(){
    assert.deepEqual(f.keyPossibilities('8').sort(),[["0", "5", "7", "8", "9"]]);
  });
  it("generates with 2 same inputs", function(){
    assert.deepEqual(f.keyPossibilities('11').sort(),[["1", "2", "4"], ["1", "2", "4"]]);
  });
  it("generates with 2 different inputs", function(){
    assert.deepEqual(f.keyPossibilities('12').sort(),[["1", "2", "4"], ["1", "2", "3", "5"]].sort());
  });
});

describe("combination", function(){
  it("generates with same input", function(){
    assert.deepEqual(f.combo(["1","2","4"],["1","2","4"]).sort(), ["11", "22", "44", "12", "21", "14", "41", "24", "42"].sort());
  });

  it("generates with different input", function(){
    assert.deepEqual(f.combo(["1","2","4"],["1","3","5"]).sort(), ["11", "13", "15", "21", "23", "25", "41", "43", "45"].sort());
  });
});