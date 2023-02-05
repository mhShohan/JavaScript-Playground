let todos = [
    {step: 1, title: 'Learn HTML.'},
    {step: 2, title: 'Learn CSS'},
    {step: 3, title: 'Learn a CSS freamwork (Bootstrap or tailwind).'},
    {step: 4, title: 'Learn Javascript fundamentals.'},
    {step: 5, title: 'Learn Javascript DOM manipulation.'},
]

function findIndex(step) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].step === step) {
            return i
        }
    }
    return -1
}

function deleteLast() {
    todos.length = todos.length - 1
}

//deleteLast()
//deleteLast()

function deleteFirst() {
    let newArr = []

    for (let i = 1; i < todos.length; i++) {
        newArr[i - 1] = todos[i]
    }

    todos = newArr

    return todos
}

//deleteFirst()
//deleteFirst()
//deleteFirst()


function deleteByStep(step) {
    let index = findIndex(step)

    for (let i = index; i < todos.length; i++) {

        todos[i] = todos[i + 1]
    }
    todos.length = todos.length - 1
}

//deleteByStep(3)
//deleteByStep(1)

console.log(todos)
