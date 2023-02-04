let students = [
    {id: 2, name: "nasim"},
    {id: 3, name: "noyon"},
    {id: 4, name: "rahat"},
    {id: 5, name: "ashik"},
    {id: 6, name: "jagat"},
]

//console.log(students)

// CRUD
//C => create --- done
//R => Read ---- done
//U => update --- done
//D => delete --- done

function createLastStudent(student){
    students[students.length] = student
    return students
}

function createFirstStudent(student){
    const newArr = new Array(students.length + 1)
    newArr[0] = student
    for (let i =0; i < students.length; i++){
        newArr[i + 1] = students[i]
    }

    students = newArr
    return students
}


//console.log(createLastStudent({id: 7, name: "shohan"}))
//console.log(createFirstStudent({id: 1, name: "shohan"}))


function readById(id){
    for (let i = 0; i < students.length; i++){
        const student = students[i]
        if(student.id === id){
            return student
        }
    }
}
function readByName(name){
    for(let i = 0; i < students.length; i++){
        const student = students[i]
        if(student.name === name){
            return student
        }
    }
}

//console.log(readById(4))
//console.log(readByName('shohan'))


function updateStudent(id, newData){
    const index = findIndex(id)

    if(index !== -1){
        students[index] = newData
    }

    return students
}
//const newData = {id: 5, name: "ashik khan"}
//console.log(updateStudent(3, newData))

function deleteLastStudent(){
    students.length -= 1

    return students
}

//console.log(deleteLastStudent())
//console.log(deleteLastStudent())

function deleteFirstStudent(){
    const newArr = []

    for(let i = 1 ; i< students.length; i++){
        newArr[newArr.length] = students[i]
    }
    students = newArr

    return students
}


//console.log(deleteFirstStudent())
//console.log(deleteFirstStudent())

function deleteStudentById(id){
    const index = findIndex(id)
    for(let i = index; i < students.length; i++){
        students[i] = students[i + 1]
    }

    students.length = students.length - 1
    return students
}
console.log(deleteStudentById(3))
function findIndex(id){
    for (let i = 0; i < students.length; i++){
        const student = students[i]

        if(student.id === id){
            return  i
        }
    }
    return  -1
}


//console.log(findIndex(1))