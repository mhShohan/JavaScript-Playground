function Person(name, age){
    this.name = name;
    this.age = age;

}

Person.prototype.getInfo =  function (){
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

const shohan = new Person('shohan',23)
const mh = new Person('mh',24)

shohan.getInfo()
mh.getInfo()