var BinarySearchTree = function(value){

  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  tree.insert = function(insertVal) {
    //base case
    //if the value we are adding is less then the tree we are in and there is nothing to the left
    if(insertVal < tree.value && tree.left === null) {
        //create a new tree on the left 
        tree.left = BinarySearchTree(insertVal);
    }

    else if(insertVal > tree.value && tree.right === null) {
        //create a new tree on the right 
        tree.right = BinarySearchTree(insertVal);      
    }
    else if(insertVal < tree.value) {
      //recusivly call the left side to run again 
      tree.left.insert(insertVal);
    }
    else if(insertVal > tree.value) {
      //recusivly call the right side to run again 
      tree.right.insert(insertVal);
    }
  };


  tree.contains = function(target) {
    // base case 1: if you find the value, return true
    if (target === tree.value) {
      return true;
    }
    // base case 2: if you've come to the end of either tree and still haven't found it, return false
    else if (tree.left === null || tree.right === null) {
      return false;
    }
    // recursive cases: 
    else if (target < tree.value) {
      // continue to check down the tree, to the left if target is less than the current value...
      return tree.left.contains(target);
    } else if (target > tree.value) {
      // ... or to the right if the target is greater than the current value
      return tree.right.contains(target);
    }
  };

  tree.depthFirstLog = function(callback) {
    // call the function on every tree right away
    callback(tree.value);
    // for each tree, check if it has nothing on either side (end of the tree)
    if (tree.left === null && tree.right === null) {
      // return nothing
      return;
    }
    // if there's nothing to the left
    else if (tree.left === null) {
      // go the right
      return tree.right.depthFirstLog(callback);
    }
    // if there's nothing to right
    else if (tree.right === null) {
      // go the left
      return tree.left.depthFirstLog(callback);
    }
    // else, if there's something on both sides, go to both sides, one after the other (that way once one recursion finishes it will go onto the next)
    else {
      tree.right.depthFirstLog(callback);
      tree.left.depthFirstLog(callback);
    }
  };

  return tree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
