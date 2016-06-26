var HashTable = function() {
  this._limit = 8;
  //create an instance of the limited array constuctor using the limit set above as the parameter (this will be an object), and store it at _storage
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // index we get from the hash function, converting our key 'k' to the bucket it should be assigned to
  var i = getIndexBelowMaxForKey(k, this._limit);

  // get the bucket array at that index if it exists, or create a new empty bucket array
  var bucket = this._storage.get(i) || [];
  
  // Three cases to check:
  // 1. If the bucket existed already:
    // 1a. If there already exists a tuple with that key in the bucket
    // 1b. If there does NOT already exist a tuple with that key in the bucket
  // 2. If the bucket does not exist already

  if (bucket.length) {
    // 1a: loop through all the tuples in the bucket (NOTE: can't use _.each bc need to break out of it)
    for (var j = 0; j < bucket.length; j++) {
      // if you find a tuple with that key
      if (bucket[j][0] === k) {
        // replace with value with the new value passed in, and stop the function from running further
        bucket[j][1] = v;
        return;
      }
    }
  }
  // 1b: If it gets through all the tuples in the existing bucket and doesn't find any tuples with that key, add it to the bucket
  // 2: Also if we created a new empty bucket, add the new tuple to it.
  bucket.push([k, v]);
  // add the new bucket at the index (for the 1b case, it will just be re-adding the bucket which is fine)
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k) {
  // index we get from the hash function, converting our key 'k' to the bucket it should be assigned to
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket array at that index if it exists
  var bucket = this._storage.get(i);

  // search through the tuples (NOTE: can't use _.each bc need to return from it if we find our value)
  for (var j = 0; j < bucket.length; j++) {
    // if we find the one with the key we're looking for
    if (bucket[j][0] === k) {
      // return the value at the key
      return bucket[j][1];
    }
  }

  // if we don't find the key in the existing bucket or if there is no existing bucket
  return null;
};

HashTable.prototype.remove = function(k) {
  // index we get from the hash function, converting our key 'k' to to the bucket it should be assigned to
  var i = getIndexBelowMaxForKey(k, this._limit);
  // get the bucket array at that index if it exists
  var bucket = this._storage.get(i);
  // search through the tuples (if the bucket didn't exist, nothing would happen as this loop just wouldn't run)
  for (var j = 0; j < bucket.length; j++) {
    // if we find the one with the key we're looking for
    if (bucket[j][0] === k) {
      // remove that tuple from the bucket
      bucket.splice(j, 1);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */