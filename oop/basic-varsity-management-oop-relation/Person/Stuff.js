const Employee = require('./Employee');

class Stuff extends Employee {
    constructor(name, email, department, account, salary, title) {
        super(name, email, department, account, salary, title);
        this._employeeID = Date.now();
        this._title = title;
    }

    set title(value) {
        this._title = value;
    }
}



module.exports = Stuff;