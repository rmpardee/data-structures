var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myStack = Object.create(stackMethods);
  return myStack;
};

var stackMethods = {};

stackMethods.index = 0;

stackMethods.size = function() {
  return this.index;
}

stackMethods.push = function(val) {
  return Stack[this.index++] = val;
}

stackMethods.pop = function() {
  if(this.size()) {
    return Stack[--this.index];
  }
}


