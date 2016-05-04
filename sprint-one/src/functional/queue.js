var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // variable to keep track of end of the queue
  var index = 0;

  // variable to keep track of the front of the queue
  var runningIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    return storage[index++] = value;
  };

  someInstance.dequeue = function(){
    // make sure the queue has some size
    if (someInstance.size()) {
      // 1. return the first value, 2. change the running index
      return storage[runningIndex++];
    }

  };

  someInstance.size = function(){
    return index - runningIndex;
  };

  return someInstance;
};
