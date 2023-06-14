const Person = require('./Person');

class Guardian extends Person {
    constructor(name, profession, income) {
        super(name);
        this._profession = profession;
        this._income = income;
    }

    set profession(value) {
        this._profession = value;
    }
    set income(value) {
        this._income = value;
    }
    get guardianDetails() {
        let str = {};
        Object.keys(this).forEach(key => {
            str[key.substring(1)] = this[key];
        });
        return str;
    }
}

module.exports = Guardian;