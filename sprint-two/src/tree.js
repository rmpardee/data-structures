var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me -- now fixed
  //add the methodes to each instance of Tree
  _.extend(newTree, treeMethods);

  return newTree;
};


  // your code here
  // newTree.children = [];  // changed null to []


var treeMethods = {};

treeMethods.addChild = function(value){
  //create a new instance of Tree using the value passed in and save to a var
  var newChild = Tree(value);

  //access the children property of the object add child is acting on (this) and push this new tree on to the end
  this.children.push(newChild);



};

treeMethods.contains = function(target){
  //create a state var and defualt to false
  var state = false;
  //create a subroutine to recursivly check the children
  var targetSearch = function(currentTree) {
    //base case: chage state var to true if target = value
    if(currentTree.value === target) {
      state = true;
    }
    //recursive case: check each item in the children array
    else {
      for(var i = 0; i < currentTree.children.length; i++) {
        targetSearch(currentTree.children[i]);
      }
    }
  }
  targetSearch(this);
  //return state var
  return state;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
