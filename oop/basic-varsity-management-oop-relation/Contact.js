class Contact {
    constructor({ email, phone, address }) {
        this._id = Date.now() + Math.floor(Math.random() * 10000);
        this._email = email;
        this._phone = phone;
        this._address = address;
    }

    get contact() {
        let str = {};
        Object.keys(this).forEach(key => {
            str[key.substring(1)] = this[key];
        });
        return str;
    }
}

module.exports = Contact;