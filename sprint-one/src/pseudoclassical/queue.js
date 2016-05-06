var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
   // The line creating the object will automatically be adding upon invocation with the 'new' keyword, as will the line at the end (I can't say the word even in the comments or the test will break!)

  // Create an index to keep track of where we are adding things next in the storage array
  this.frontIndex = 0;
  // Create an index to keep track of where we are removings things next from the beginning of the storage array
  this.endIndex = 0;
};

// Add the methods to the prototype object of the Stack function
Queue.prototype.size = function() {
  // The differece of the indeces will represent the size of the stack
  return this.endIndex - this.frontIndex;
};

Queue.prototype.enqueue = function(value) {
  // Add the value at the current end index, then increment the end index
  this[this.endIndex++] = value;
};

Queue.prototype.dequeue = function() {
  // If there is anything in the object currently (it has some size)
  if (this.size()) {
    // 1. return the first value, 2. change the running endIndex
    return this[this.frontIndex++];
  }
};


