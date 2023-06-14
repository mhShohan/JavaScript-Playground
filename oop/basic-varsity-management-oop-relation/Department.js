class Department {
    constructor(name, subjects, dean, teachers) {
        this._id = Date.now();
        this._name = name;
        this._subjects = subjects || [];
        this._dean = dean || null;
        this._teachers = teachers || [];
    }



    get departmentDetails() {
        let str = {};
        Object.keys(this).forEach(key => {
            str[key.substring(1)] = this[key];
        });
        return str;
    }

    addTeacher(value) {
        this._teachers.push(value);
    }

    addSubjects(value) {
        this._subjects.push(value);
    }
}


module.exports = Department;