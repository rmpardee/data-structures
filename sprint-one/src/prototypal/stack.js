var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use an object with numeric keys to store values
  // I think for true prototypal style, stackMethods should be Stack.prototype, but the tests don't pass if you do that
  var myStack = Object.create(stackMethods);
  // Create an index to keep track of where to add the next value onto the storage object
  myStack.index = 0;
  // Return the object we've built
  return myStack;
};

// Create the global object to hold our methods, which will be extended onto each instance
var stackMethods = {};

// Add the methods to the method object
stackMethods.size = function() {
  // The index is used to keep track of the size of the stack
  return this.index;
};

stackMethods.push = function(val) {
  // Add the value at the current index, then increment index
  this[this.index++] = val;
};

stackMethods.pop = function() {
  // If there is anything in the object currently (it has some size)
  if(this.size()) {
    // First decrement the index (to get it to represent the last item added), and return the value at that index.
    return this[--this.index];
  }
};


