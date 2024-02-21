const person = {
    name: "Elvin",
    age: 35,
    origin: "Azerbaijan",
    occupation: "Programmer",
    toString: function() {
        return `My name is ${this.name}. I am ${this.age} years old and I am from ${this.origin}. Working as ${this.occupation}`
    }
}

const handler = {
    get: function(target, prop) {
        if(target[prop] === 'Elvin') {
            target[prop] = target[prop].split("").reverse().join("")
        }
        return target[prop]
    },

    set: function(target, prop, value) {
        if(prop === 'number') {
            target[prop] = '+994' + value
            return true
        }
        target[prop] = value;
        return true
    },

    apply: function(target, thisArg, args) {
        return target.apply(thisArg, args);
      },
};

const proxiedPerson = new Proxy(person, handler);
proxiedPerson.number = '558043484'


console.log(proxiedPerson.toString())