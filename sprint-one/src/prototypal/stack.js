var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myStack = Object.create(stackMethods);
  // seems to be equivalent to put it in the constructor or in the methods object, we'll leave in methods for best practice.
  // myStack.index = 0;
  return myStack;
};

var stackMethods = {};

stackMethods.index = 0;

stackMethods.size = function() {
  return this.index;
}

stackMethods.push = function(val) {
  return this[this.index++] = val;
}

stackMethods.pop = function() {
  if(this.size()) {
    return this[--this.index];
  }
}


