var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // index we get from the hash function, converting our key 'k' to a number within our limit
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log('index from insert: ', i);

  // the array at that index
  var arr = this._storage.get(i);

  // check if there is an array at that index already
  if (Array.isArray(arr)) {
    arr.push(v);
  // if it's not an array yet, add the value as the first item in an array at that index
  } else {
    // access the set method in the limited array instance, and pass in our index and value inside a new array
    this._storage.set(i, [v]);
  }

};

HashTable.prototype.retrieve = function(k){
  // index we get from the hash function, converting our key 'k' to a number within our limit
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log('index from retrieve: ', i);
  // access the get method in the limited array instance, and pass in our index
  var arr = this._storage.get(i);
  for (var j=0; j < arr.length; j++) {
    if (arr[j] === k) {
      return arr[j];
    }
  }
};

HashTable.prototype.remove = function(k){
  // index we get from the hash function, converting our key 'k' to a number within our limit
  var i = getIndexBelowMaxForKey(k, this._limit);
  // access the set method in the limited array instance, passing in our index, and reset the value to undefined
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
