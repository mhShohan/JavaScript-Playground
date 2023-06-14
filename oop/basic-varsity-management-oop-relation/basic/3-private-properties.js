const _name = Symbol('name');
const _email = Symbol('email');

class User {
    constructor(name, email) {
        this[_name] = name;
        this[_email] = email;
    }

    print() {
        console.log(this);
    }
}

const user1 = new User('shohan', 'shohan@gmail.com');

console.log(user1.name);

user1.print();