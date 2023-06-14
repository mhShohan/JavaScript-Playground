class Exam {
    constructor(name, mark, subject) {
        this._id = Date.now();
        this._name = name;
        this._mark = mark;
        this._subject = subject;
    }

    get examDetails() {
        let str = {};
        Object.keys(this).forEach(key => {
            str[key.substring(1)] = this[key];
        });
        return str;
    }
}


module.exports = Exam;