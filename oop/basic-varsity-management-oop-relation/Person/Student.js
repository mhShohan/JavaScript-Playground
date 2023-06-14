const UniPerson = require('./UniPerson');

class Student extends UniPerson {
    constructor(name, department, account) {
        super(name, department, account);
        this._guardian = null;
        this._exams = [];
        this._fee = null;
    }

    set guardian(values) {
        this._guardian = values;
    }
    set exams(values) {
        this._exams = values;
    }
    set fee(value) {
        this._fee = value;
    }

    addExam(exam) {
        this._exams.push(exam);
    }

    get studentDetails() {
        let str = {};
        Object.keys(this).forEach(key => {
            str[key.substring(1)] = this[key];
        });
        return str;
    }
}



module.exports = Student;