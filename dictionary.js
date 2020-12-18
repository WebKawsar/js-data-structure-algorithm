
// const dictionary = {};

// dictionary["name"] = "Kawsar Ahmed";
// console.log(dictionary);
// const name = "name";
// console.log(dictionary[name]);


class Dictionary {
    constructor(){
        this.dictionary = {}
    }

    add(key, value){
        this.dictionary[key] = value;
    }

    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add("Kawsar", "01733920943");
phoneBook.add("Shamim", "017171717171");
phoneBook.add("Murad", "0181818181818");

console.log(phoneBook.dictionary);
console.log(phoneBook.get("Kawsar"));




