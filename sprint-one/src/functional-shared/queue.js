var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Use an object with numeric keys to store values
  var storage = {};
  // Create an index to keep track of where to add the next value to the storage object
  storage.endIndex = 0;
  // Create an index to keep track of where to remove the next value from the beginning of the storage object
  storage.frontIndex = 0;
  // Extend with methods object
  _.extend(storage, queueMethods);
  // Return the object we've built
  return storage;
};

// Create the global object to hold our methods, which will be extended onto each instance
queueMethods = {};

// Add the methods to the method object
queueMethods.size = function() {
  // The differece of the indeces will represent the size of the stack.
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

