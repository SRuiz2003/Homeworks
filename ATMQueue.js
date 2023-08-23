class Queue{
    constructor(){
    this.queue = [];
    }
    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }
    
    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        return this.queue;
    }

} 

const ATM = new Queue();
const p1 = {
    "nombre": "Ana García",
    "tiempo_llegada": "08:30 AM"
  };
  
const p2 = {
    "nombre": "Carlos Martínez",
    "tiempo_llegada": "09:15 AM"
  };
  
const p3 = {
    "nombre": "María López",
    "tiempo_llegada": "10:00 AM"
  };
  
const p4 = {
    "nombre": "Juan Rodríguez",
    "tiempo_llegada": "10:30 AM"
  };
  
  ATM.enqueue(p1);
  ATM.enqueue(p2);
  ATM.enqueue(p3);
  ATM.enqueue(p4);
  ATM.print();

