// Create Single file for a single class

class Person {
    static className = 'Person';

    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }

    // getter function 
    get name() { return this._name; }
    get email() { return this._name; }

    //setter function 
    set name(name) {
        this._name = name;
    }

    set email(email) {
        this._email = email;
    }

    print() {
        console.log(this);
    }

    printAll() {
        let str = {};
        Object.keys(this).forEach(key => {
            str[key.substring(1)] = this[key];
        });
        console.log(str);
    }


}


class Student extends Person {
    constructor(name, email, age, ID, department) {
        super(name, email, age);
        this._ID = ID;
        this._department = department;
    }
}




class Teacher extends Student {
    constructor(name, email, age, ID, department, salary) {
        super(name, email, age, ID, department);
        this._salary = salary;
    }
}


const person1 = new Person('person', 'person@p.com', 20);
const student = new Student('student', 'student@p.com', 20, '123', 'EEE');
const teacher = new Teacher('teacher', 'student@p.com', 20, '123', 'EEE', 100000);

person1.printAll();
student.printAll();
teacher.printAll();
