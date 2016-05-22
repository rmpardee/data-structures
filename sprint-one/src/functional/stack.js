var Stack = function() {
  // Use an object with numeric keys to store values
  var storage = {};
  // Create an index to keep track of where we are adding things next in the storage array.
  var index = 0;

  // The object we will be building and returning
  var someInstance = {};

  // Add the methods to the object - methods will be recreated for each instance
  someInstance.size = function() {
    // The index is used to keep track of the size of the stack.
    return index;
  };
  someInstance.push = function(value) {
    // Add the value at the current index, then increment index
    storage[index++] = value;
  };

  someInstance.pop = function() {
    // If there is anything in the object currently (it has some size)
    if(someInstance.size()) {
      // First decrement the index (to get it to represent the last item added), and return the value at that index.
      return storage[--index];
    }
  };

  // Return the object we've added the methods to
  return someInstance;
};
