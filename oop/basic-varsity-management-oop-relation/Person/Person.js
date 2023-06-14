class Person {
    constructor(name, contact) {
        this._id = Date.now() + Math.floor(Math.random() * 10000);
        this._name = name;
        this._contact = contact || null;
    }

    set contact(value) {
        this._contact = value;
    }

    get use() {
        let str = {};
        Object.keys(this).forEach(key => {
            str[key.substring(1)] = this[key];
        });
        return str;
    }
}


module.exports = Person;