const UniPerson = require('./UniPerson');

class Employee extends UniPerson {
    constructor(name, department, salary) {
        super(name, department, salary);
        this._employeeID = Date.now();
        this._salary = salary;
    }

    set salary(value) {
        this._salary = value;
    }

}



module.exports = Employee;