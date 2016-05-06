var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use an object with numeric keys to store values
  // I think to be true prototypal style, queueMethods should be Queue.prototype, but the tests don't pass if you do that.
  var storage = Object.create(queueMethods);

  // Create an index to keep track of where we are adding things next in the storage array
  storage.endIndex = 0;
  // Create an index to keep track of where we are removings things next from the beginning of the storage array
  storage.frontIndex = 0;
  // Return the object we've built
  return storage;
};

// Create the global object to hold our methods, which will be extended onto each instance
var queueMethods = {};

// Add the methods to the method object
queueMethods.size = function() {
  // The differece of the indeces will represent the size of the stack
  return this.endIndex - this.frontIndex;
};

queueMethods.enqueue = function(val) {
  // Add the value at the current end index, then increment the end index
  return this[this.endIndex++] = val;
};

queueMethods.dequeue = function() {
  // If there is anything in the object currently (it has some size)
  if(this.size()) {
    // 1. return the first value, 2. change the running endIndex
    return this[this.frontIndex++];
  }
};


