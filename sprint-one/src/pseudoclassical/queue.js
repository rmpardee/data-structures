var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.frontIndex = 0;
  this.endIndex = 0;
};

Queue.prototype.size = function() {
  return this.endIndex - this.frontIndex;
};

Queue.prototype.enqueue = function(value) {
  // 1. adding new value at current end index, 2. increment end index
  return this[this.endIndex++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.size()) {
    // 1. return the value at the current front index, 2. increment front queue
    return this[this.frontIndex++];
  }
};


