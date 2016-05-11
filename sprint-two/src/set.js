var Set = function() {
  var set = Object.create(setPrototype);
  // undefined to allow it to be an empty set
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // check if the set is empty now
  if (this._storage === undefined) {
    // if so redefine it as an empty object
    this._storage = {};
  }
  // assign the item as the key and the value as null on the _storage object
  this._storage[item] = null;

  // old method: having the value be a counter for how many times that key has been added (believe is unnecessary)
  // if(this._storage[item] === undefined) {
  //   var counter = this._storage[item]
  //   counter++
  //   this._storage[item] = counter;
  // } else {
  //   this._storage[item] = 1;
  // }
};

setPrototype.contains = function(item){
  // check if the item exists (by checking if it has a value and that value is null)
  return (this._storage[item] === null);
};

setPrototype.remove = function(item){
  // if the item exists (by checking if it has a value and that value is null)
  if(this._storage[item] === null) {
    // delete that key
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
