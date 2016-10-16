var model = {
  possibilities: {
    "1": ["1", "2", "4"],
    "2": ["1", "2", "3", "5"],
    "3": ["2", "3", "6"],
    "4": ["1", "4", "5", "7"],
    "5": ["2", "4", "5", "6", "8"],
    "6": ["3","5", "6", "9"],
    "7": ["4","7", "8"],
    "8": ["0", "5", "7", "8", "9"],
    "9": ["6", "8", "9"],
    "0": ["8"]
  },
  getPINs: function(observed) {
    var arr = observed.split("");
    if(arr.length === 1) return possibilities[arr[0]];
    var possibleKeys = this.keyPossibilities(arr);
    this.combinations(possibleKeys);
  },
  keyPossibilities: function(arr){
    var permutations = [];
    for(var item of arr){
      var possibles = this.possibilities[item];
      permutations.push(possibles);
    }
    return permutations;
  },
  combinations: function(possibilitiesPerKey) {

  },
  combo: function(first, second){
    var result = []
    for(var item of first) {
      for(var match of second){
        result.push(item+match);
      }
    }
    return result;
  }
}

// getPINs("11");

//["11", "22", "44", "12", "21", "14", "41", "24", "42"]

module.exports = model;