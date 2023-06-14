class Subject {
    constructor(name, credit) {
        this._id = Date.now() + Math.floor(Math.random() * 10000);
        this._name = name;
        this._credit = credit;
    }

    get subjectDetails() {
        let str = {};
        Object.keys(this).forEach(key => {
            str[key.substring(1)] = this[key];
        });
        return str;
    }
}


module.exports = Subject;