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
  }


tree.contains = function(containsVal) {
  var state = false;
  //base case
  console.log('containsVal: ', containsVal);
  console.log('tree.value: ', tree.value);
  if (containsVal === tree.value) {
    console.log('inside if statement')
    state = true;
    console.log('redefined state to true: ', state);
    return;
  }

  else if(containsVal < tree.value) {
      console.log('Tree.left', tree.left);
    if(tree.left === null) {
      state = false;
    } else {
      tree.left.contains(containsVal);
    }
  } else if (containsVal > tree.value) {
      // console.log('Tree.right', tree.right);
      // console.log('containsVal ', containsVal)
      // console.log('tree.value', tree.value)
      console.log('should be true: ', tree.right === null);
    if(tree.right === null) {
      state = false;
    } else {
      console.log('running recursion')
      tree.right.contains(containsVal);
    }
  } 
console.log('STATE at the end, before return: ', state);
  return state;

};

tree.depthFirstLog = function(callback) {

};

return tree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
