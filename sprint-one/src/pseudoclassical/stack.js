var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // The line creating the object will automatically be adding upon invocation with the 'new' keyword, as will the line at the end (I can't say the word even in the comments or the test will break!)

  // Create an index to keep track of where to add the next value onto the storage object
  this.index = 0;
};

// Add the methods to the prototype object of the Stack function
Stack.prototype.size = function() {
  // The index is used to keep track of the size of the stack
  return this.index;
};

Stack.prototype.push = function(value) {
  // Add the value at the current index, then increment index
  this[this.index++] = value;
};

Stack.prototype.pop = function() {
  // If there is anything in the object currently (it has some size)
  if (this.size()) {
     // First decrement the index (to get it to represent the last item added), and return the value at that index.
    return this[--this.index];
  }
};


