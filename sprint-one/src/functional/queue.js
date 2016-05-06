var Queue = function() {
  // Use an object with numeric keys to store values
  var storage = {};

  // Create an index to keep track of where we are adding things next in the storage array
  var endIndex = 0;
  // Create an index to keep track of where we are removings things next from the beginning of the storage array
  var frontIndex = 0;

  // The object we will be building and returning
  var someInstance = {};

  // Add the methods to the object - methods will be recreated for each instance
  someInstance.size = function() {
    // The differece of the indeces will represent the size of the stack
    return endIndex - frontIndex;
  };

  someInstance.enqueue = function(value) {
    // Add the value at the current end index, then increment the end index
    storage[endIndex++] = value;
  };

  someInstance.dequeue = function() {
    // If there is anything in the object currently (it has some size)
    if (someInstance.size()) {
      // 1. return the first value, 2. change the running endIndex
      return storage[frontIndex++];
    }
  };

  // Return the object we've added the methods to
  return someInstance;
};
