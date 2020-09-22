/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, visited = {}) {
    if(!node) return;
    if(node.val in visited) return visited[node.val]

    const newNode = new Node(node.val);
    visited[node.val] = newNode;

    const cloneNeigbors = []
    for(const neighbor of node.neighbors){
      cloneNeigbors.push(cloneGraph(neighbor, visited))
    }

    newNode.neighbors = cloneNeigbors;
    return newNode

};