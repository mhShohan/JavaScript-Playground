const Employee = require('./Employee');

class Teacher extends Employee {
    constructor(name, department, salary, subject) {
        super(name, department, salary, subject);
        this._employeeID = Date.now();
        this._subject = subject;
    }

    get department() {
        return this._department;
    }

    set subject(value) {
        this._subject = value;
    }
}



module.exports = Teacher;