
class Queue{

    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item)
    }

    dequeue(){
        if(this.queue.length){
            this.queue.shift();
        }
    }

}


const premiks = new Queue();
premiks.enqueue("Salman Khan");
premiks.enqueue("Sharukh Khan");
premiks.enqueue("Amir Khan");
premiks.enqueue("Fazil Khan");
premiks.enqueue("Mr Khan");

console.log(premiks.queue);

premiks.dequeue();
premiks.dequeue();

console.log(premiks.queue)





