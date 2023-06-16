class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    print() {
        console.log(this);
    }
}


class Student extends Person {
    constructor(name, age) {
        super(name, age);
    }

}

const std = new Student('shohan', 23);

std.print();