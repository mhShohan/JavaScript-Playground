class Person{
    constructor(name, age, hometown){
        this.name = name;
        this.age = age;
        this.hometown = hometown;
    }

    getInfo(){
        console.log(`${this.name} is ${this.age} years old and lived in ${this.hometown}`)
    }
}

// Student class inherite the Person class
class Student extends Person{
    constructor(name,age, hometown,studentId) {
        super(name, age,hometown);
        this.studentId = studentId
    }
    getStudentInfo(){
        console.log({
            id: this.studentId,
            name: this.name,
            age: this.age,
            hometown: this.hometown
        })
    }
}

const first = new Student('shohan',23,'pabna','17EEE145')

first.getInfo()
first.getStudentInfo()