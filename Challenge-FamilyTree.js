class Node {
    constructor(value){
        this.value = value;            
        this.children = [];
        }
    }

class NaryTree{
    constructor(){
        this.root=null;
    }

    search(value, node = this.root) {
        if(!this.root){
            return null;
        }

        if(this.root.value === value){
            return this.root;
        }else{
            const children = node.children;
            const inChildren = children.find( item => item.value === value)
            if( inChildren){
                return inChildren
            }else{
                let hasChild;
                children.forEach( item => {
                    if(hasChild){
                        return;
                    }
                    hasChild = this.search(value,item);
                })
                return hasChild;
            }
        }
    }

    insert(value, parent){
        const newNode = new Node(value);

        if(!parent){
            if(!this.root){
                this.root = newNode;
            }else{
                return null;
            }
        }else{
            const parentNode = this.search(parent);
            parentNode.children.push( newNode );
        }
    }

    preOrder(node = this.root){
        if(!node){
            return;
        }
        console.log(node.value, node.children);

        node.children.forEach( element => {
            this.preOrder(element);
        });
    }

    postOrder(node = this.root){
        if(!node){
            return;
        }

        node.children.forEach( element =>{
            this.postOrder(element);
        });
        console.log(node.value);
    }

    inOrder(node = this.root){
        if(!node){
            return;
        }

        if( node.children.length === 0){
            console.log(node.value);
        }else{
            this.inOrder(node.children[0]);
            console.log(node.value);

            for( let i = 1; i<node.children.length; i++){
                this.inOrder(node.children[i]);
            }
        }
    }
}

const nary = new NaryTree();

const yo = {
    nombre:"Simon Ruiz Camacho",
    fechaNac:"2003-03-21"
}

const hermana = {
    nombre:"Maria Camila Ruiz Camacho",
    fechaNac:"1999-05-13"
}

const mama = {
    nombre:"Eliana Camacho Cedeño",
    fechaNac:"1974-03-09"
}

const tia ={
    nombre:"Luz Mila Camacho Cedeño",
    fechaNac:"1983-09-12"
}

const abuela = {
    nombre:"Luz Mila Cedeño Villa",
    fechaNac:"1950-04-24"
}


nary.insert(abuela);
nary.insert(mama,abuela);
nary.insert(tia,abuela);
nary.insert(hermana,mama);
nary.insert(yo,mama);
console.log("In Order: ");
nary.inOrder();
console.log("Pre Order: ");
nary.preOrder();
console.log("Post Order: ");
nary.postOrder();