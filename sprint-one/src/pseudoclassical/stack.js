var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
};

// Stack.prototype.index = 0;

Stack.prototype.size = function() {
  return this.index;
};

Stack.prototype.push = function(value) {
  return this[this.index++] = value;
};

Stack.prototype.pop = function() {
  if (this.size()) {
    return this[--this.index];
  }
};


