const Person = require('./Person');

class UniPerson extends Person {
    constructor(name, department) {
        super(name);
        this._department = department || null;
    }

    set department(value) {
        this._department = value;
    }
    set account(value) {
        this._account = value;
    }

}

module.exports = UniPerson;