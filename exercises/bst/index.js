// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create and insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left, right) {
        this.data = { data: data };
        this.left = { data: left };
        this.right = { data: right };
    }
    insert(data) {
        if (this.left.data < data) {
            let temp = this.left.data;
            if (this.left.right) {
                if (this.left.right.data > data) {                    
                    this.left.data = data;
                    this.left.left = { data: temp };                    
                }
            }
            else{
                this.left.right = { data: data };
            }
        }   
    }
    contains(data) {
        let res;
        if (this.right.data > data) {
            if (this.left.data < data) {
                if (this.left.right.data == data) {
                    res = this.left.right;
                }
            }            
        }
        return res;
    }
}
//let people = ['Mark', 'Binaisha', 'Callen', 'Raynah', 'Hubert', 'Miriam', 'Kelwyn', 'Sandra'];
//let bst = new Node('Mark', 'Binaisha', 'Miriam');
//bst.insert('Callen');
//bst.insert('Brielle');
//bst.contains('Callen');
module.exports = Node;
