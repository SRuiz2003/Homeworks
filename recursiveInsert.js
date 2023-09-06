class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    isLeaf(){
        if (this.left == null && this.right){
            return true;
        }else{
            return false;
        }
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }


    insert(value, root){
        if(!root || root.value == value) return new Node(value);
        if (value > root.value) {
           root.right = this.insert(root.right, value);
        } else {
             root.left = this.insert(root.left, value);
        }
        return root;

    }

    preOrder(node = this.root){
        if(!node){
            return
        }
        console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
}

const bi = new BinaryTree();
bi.insert(null,5);
bi.insert(5,4);
bi.insert(5,6);
bi.preOrder();


