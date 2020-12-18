class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }

    add(value){
        const newNode = new Node(value);
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

}

const head = new Node(5555);
const mBondhon = new LinkedList(head);
mBondhon.add(125)
mBondhon.add(24)
mBondhon.add(1)
console.log(JSON.stringify(mBondhon));



