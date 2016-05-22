var LinkedList = function(){
  var list = {};

  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node (save it as a variable so you're only creating it once)
    var newNode = Node(value);

    // if there's nothing at the head yet (it's the first thing added)
    if (!list.head) {
        // have the head point to this new node
        list.head = newNode;
    // if this is not the first thing added
    } else {
        // set the value of the next property on the previous node to be the newNode
        list.tail.next = newNode;
    }
    // now change the tail to point to this new node in either case
    list.tail = newNode;
  };


  list.removeHead = function(){
    // save to a variable the object that is currently the head (essentially, the entire chain)
    var chain = list.head;
    // have the head point to the next property of what it was currently pointed to (the rest of the chain after this head object we're removing)
    list.head = chain.next;
    // return the value that was stored at the beginning of the chain
    return chain.value;
  };


  list.contains = function(target){
    // create a recursive subroutine to check a value
    // NOTE: have to use subroutine because we know contains only takes in one parameter from the tests; if we were to recurse the function itself it would have to also take in a node.
    var searchForValue = function(node){
        // base case 1: if you find the value we're looking for, change state to true
        if (node.value === target) {
            return true;
        // base case 2: if you get to the tail, that means you've looked through all of them so return false
        } else if (node.next === null) {
            return false;
        // recursive case: if not, check the next value
        } else {
            return searchForValue(node.next);
        }
    };
    // return the results of calling the recursive function on our chain (which is all stored in the head)
    return searchForValue(list.head);
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
