class Student{
    id = 1;
    constructor(name,city){
        this.name = name;
        this.city = city
    }

    get getInfo(){
        return {name: this.name, city: this.city}
    }
    set setCity(city){
        this.city = city
    }
}

const first = new Student( 'mh','pabna')

// getter function of Student class, invoking system is like accessing object
console.log(first.getInfo)
//setter function
first.setCity = 'Gopalganj'
console.log(first.getInfo)