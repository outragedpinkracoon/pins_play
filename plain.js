var possibilities = {
  "1": ["1", "2", "4"],
  "2": ["1", "2", "3", "5"],
  "3": ["2", "3", "6"],
  "4": ["1", "4", "5", "7"],
  "5": ["2", "4", "5", "6", "8"],
  "6": ["3","5", "6", "9"],
  "7": ["4","7", "8"],
  "8": ["0", "5", "7", "8", "9"],
  "9": ["6", "8", "9"],
  "0": ["0", "8"]
}

var getPINs = function(observed) {
  var arr = observed.split("");
  if(arr.length === 1) return possibilities[arr[0]];
  var possibleKeys = keyPossibilities(arr);
  combinations(possibleKeys);
}

var keyPossibilities = function(arr){
  var permutations = [];
  for(var item of arr){
    var possibles = possibilities[item];
    permutations.push(possibles);
  }
  return permutations;
}
var combinations = function(keySets, result){
  var firstSets = combo(keySets[0], keySets[1]);
  var remaining = keySets.slice(2, keySets.length);
  if(remaining.length === 0) return firstSets;

  var results = [];

  var run = function(sets){
    if(sets.length === 0) return;
    var current = sets[0];
    var result = combo(firstSets, current);
    results = result;
    sets.shift();
    run(sets);
  }

  run(remaining);
  return results;
}

var combo = function(first, second){
  var result = []
  for(var item of first) {
    for(var match of second){
      var added = item+match;
      if(!contains(result, added)) result.push(added);
    }
  }
  return result;
}

var contains = function(array, check){
  var matched = array.filter(function(item){
    return item === check;
  });
  return matched.length !== 0;
}