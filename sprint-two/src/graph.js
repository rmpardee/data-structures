

// ###Graph Solution

// Instantiate a new graph
var Graph = function() {

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create an empty array for edges, using the node as key
  this[node] = [];
};

Graph.prototype.contains = function(node){
  // check if that node is in the object using native contains method
  if (this[node]) {
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  // remove that node from the object
  delete this[node];
  // we don't think it matters that the node will still exist in a different node's edges array
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  // loop through the edges array of the fromNode
  for (var i=0; i < this[fromNode].length; i++){
    // if toNode is present, return true
    if (this[fromNode][i] === toNode) {
      return true;
    } else {
      // otherwise, return false
      return false;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  if (this[fromNode] && this[toNode]) {
    this[fromNode].push(toNode);
    this[toNode].push(fromNode);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  // loop through the fromNode
  for (var i=0; i < this[fromNode].length; i++) {
    if (this[fromNode][i] === toNode) {
      this[fromNode].splice(i, 1);
    }
  }
  for (var i=0; i < this[toNode].length; i++) {
    if (this[toNode][i] === fromNode) {
      this[toNode].splice(i, 1);
    }
  }
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  // All methods of the prototype are appearing as keys in each instance.  So we will filter out the methods to only pass actual nodes to the callback.  
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      cb(key);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



