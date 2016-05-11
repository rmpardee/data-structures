var HashTable = function(){
  this._limit = 8;
  //create an instance of the limited array constuctor using the limit set above as the parameter (this will be an object), and store it at _storage
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  // index we get from the hash function, converting our key 'k' to a number within our limit
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log('index from insert: ', i);

  // the object at that index
  var obj = this._storage.get(i);

  // check if there is an object at that index already
  if (typeof obj === 'object') {
    //assign the object the key value pair
    obj[k] = v;
  // if it's not an object yet
  } else {
    // create an empty object
    var objAtIndex = {};
    //and assign it the target key value pair
    objAtIndex[k] = v;
    // add this object at the index
    this._storage.set(i, objAtIndex);
  }

};

HashTable.prototype.retrieve = function(k){
  // index we get from the hash function, converting our key 'k' to a number within our limit
  var i = getIndexBelowMaxForKey(k, this._limit);
  // access the get method in the limited array instance, and pass in our index
  var obj = this._storage.get(i);
  //if no object is found at this index
  if (obj === undefined) {
    return null;
  //if there is an object found, return the value at the key
  } else {
    return obj[k];
  }
};

HashTable.prototype.remove = function(k){
  // index we get from the hash function, converting our key 'k' to a number within our limit
  var i = getIndexBelowMaxForKey(k, this._limit);
  //get the object at this index and store to a var
  var obj = this._storage.get(i)
  //set the key in the object at found index to null
  obj[k] = null;

};




/*
 * Complexity: What is the time complexity of the above functions?
 */