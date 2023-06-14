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
        let str = '';
        Object.keys(this).forEach(key => {
            str += `${key}: ${this[key]}, `;
        });

        console.log(str);
    }



    // function overriding
    toString() {
        return `Name: ${this._name} || Email: ${this._email}`;
    }
    printStr() {
        console.log(this + '');
    }
}

const shohan = new Person('shohan', 'shohan@gmail.com', 24);

// invoke the setter method
shohan.name = 'Mehdi Hasan Shohan';

// invoke the getter method
// shohan.name;

shohan.print();
shohan.printStr();


// static properties can not be access  in the instantiated object, 
// To access the static properties 
console.log(Person.className);