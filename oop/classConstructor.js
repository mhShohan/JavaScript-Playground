class Student{
        id = 1;
    constructor(name,city){
        this.name = name;
        this.city = city
    }
    getInfo(){
        console.log({id:this.id,name:this.name,city:this.city})
    }
    static newId(){
       console.log(this.name)
    }
}

const first = new Student( 'mh','pabna')
Student.newId()
const second = new Student( 'shohan','pabna')

//console.log(first.getInfo())
//console.log(second.getInfo())