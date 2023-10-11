class Graph{
    constructor(){
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node) {
        this.nodes.push(node)
        this.adjList[node] = []
    }

    addEdge( node1, node2 ) {
        this.adjList[node1].push(node2); 
        this.adjList[node2].push(node1);
        }
    
    searchNode( value ) { 
        if (!this.nodes.length) {
            return;
        }
        return this.nodes.find( item => item === value );
    }

    printAdjacency ( value ) {
        if (this.searchNode( value )) { 
            console.log( this.adjList[ value ] )
        } else {
            return;
        }
    }
}

const g = new Graph();

const f1 = {
    nombre:"Pepe",
    edad:27
}

const f2 = {
    nombre:"Andres",
    edad:24
}

const f3 = {
    nombre:"Julian",
    edad:31
}

const f4 = {
    nombre:"Carlos",
    edad:21
}

const f5 = {
    nombre:"Martin",
    edad:25
}

const c1 = {
    nombre:"Cali"
}

const c2 = {
    nombre:"Bogota"
}

g.addNode(c1);
g.addNode(c2);
g.addNode(f1);
g.addNode(f2);
g.addNode(f3);
g.addNode(f4);
g.addNode(f5);
g.addEdge(f1,c1);
g.addEdge(f2,c1);
g.addEdge(f3,c1);
g.addEdge(f4,c2);
g.addEdge(f5,c2);
g.printAdjacency(c1);
