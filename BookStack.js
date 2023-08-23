class Stack{
    constructor(){
        this.stack = {};
    }
    push(element){
        this.stack.push(element);
        return this.stack;
    }
    pop() {
        return this.stack.pop();
    }
    peek(){
        return this.stack[this.stack.length - 1];
    }
    size() {
        return this.stack.length;
    }
    print(){
        console.log(this.stack);   
    }

}

const Books = new Stack();

const book1 = {
    "nombre": "1984",
    "isbn": "978-0451524935",
    "autor": "George Orwell",
    "editorial": "Signet Classics"
  }
const book2 = {
    "nombre": "Cells",
    "isbn": "978-1234567890",
    "autor": "John Doe",
    "editorial": "Example Publishing"
  }
const book3 = {
    "nombre": "The Shining",
    "isbn": "978-0307743657",
    "autor": "Stephen King",
    "editorial": "Anchor"
  }
const book4 = {
    "nombre": "Dawnshard",
    "isbn": "978-1938570226",
    "autor": "Brandon Sanderson",
    "editorial": "Dragonsteel Entertainment"
  }

Books.push(book1);
Books.push(book2);
Books.push(book3);
Books.push(book4);
Books.print();

