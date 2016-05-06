var LinkedList = function(){
  var list = {};
  // create an index to increment
  // list.index = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // check if there's nothing in list yet (no tail defined)
    if (list.tail === null) {
    // example: we want to add the value 4
      // if so, create a new object at the key 'tail' (tail: {value: 4})
      list.tail = {'value': value};
    }

    // if it's the second item (head still hasn't been defined)
    else if (list.head === null) {
      // example: list has head: {value: 4} and we want to add the value 5
      list.head = list.tail;
      // update the tail to the new value passed in
      list.tail = {'value': value};
    }

    // if it's the third or later item
    else {
      // example: we're adding 6
      // the thing currently at tail ({value: 5}), reassign somewhere new (at the key '6'):
      // create a key-value pair on the list object. The value will be an object that holds the tail's value, the key is the passed in parameter.
      list[value] = {'value': list.tail.value};
      // update the tail to the new value passed in
      list.tail = {'value': value};
    }
  }


  list.removeHead = function(){
    // save the current head to a variable
    // delete 
    // delete the head
    // return the saved variable
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
