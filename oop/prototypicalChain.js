function Person(name, age){
    this.name = name;
    this.age = age;

}

Person.prototype.getInfo =  function (){
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

const shohan = new Person('shohan',23)
const mh = new Person('mh',24)

/// prototype access
console.log(Person.prototype)
console.log(shohan.__proto__)

//. prototypical chaining
console.log(shohan.__proto__.__proto__)
console.log(Object.getPrototypeOf((mh)))