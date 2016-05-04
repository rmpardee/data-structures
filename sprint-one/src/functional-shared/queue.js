var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myStack = {};
  _.extend(myStack, Queue.queueMethods);
  return myStack;
};

Queue.queueMethods = {};

Queue.queueMethods.endIndex = 0;

Queue.queueMethods.frontIndex = 0;

Queue.queueMethods.size = function() {
  return this.endIndex - this.frontIndex;
}

Queue.queueMethods.enqueue = function(val) {
  return Queue[this.endIndex++] = val;
}

Queue.queueMethods.dequeue = function() {
if(this.size() > 0) {
  return Queue[this.frontIndex++];
  }
}

