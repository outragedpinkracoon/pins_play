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

describe("rotate", function(){
  it("rotates", function(){
    assert.deepEqual(f.rotate(["1","2","4"]), ["2","4","1"]);
  });
});

describe("contains", function(){
  it("contains the item", function(){
    assert.deepEqual(f.contains(["1","2","4"], "1"), true);
  });

  it("doesn't contain the item", function(){
    assert.deepEqual(f.contains(["1","2","4"], "5"), false);
  });
});


describe("combinations", function(){
  it("generates with same inputs", function(){
    assert.deepEqual(f.combinations([["1","2","4"],["1","2","4"]]).sort(), ["11", "22", "44", "12", "21", "14", "41", "24", "42"].sort())
  });

  // it("generates the stuff", function(){
  //   assert.deepEqual(f.combinations([["2", "3", "6"],["3","5", "6", "9"],["6", "8", "9"]]).sort(), ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
  //  .sort())
  // });

  
});