 const friends = [];

 friends.push(101);
 friends.push(201);
 friends.push(301);
 friends.push(401);
 
//  console.log(friends);

const one = friends.pop()
// console.log(one);
// console.log(friends);



class StackPractice {
    constructor(){
        this.stack = [];
    }

    add(item){
        this.stack.push(item);
    }

    remove(){
        if(this.stack.length){
            this.stack.pop();
        }
    }
}

const guest = new StackPractice();
guest.add("Kawsar")
guest.add("Shamim")
guest.add("Murad")
guest.add("Maksud")

console.log(guest.stack);

guest.remove()
guest.remove()

console.log(guest.stack);