let todos = [
    {step: 1, title: 'Learn HTML.'},
    {step: 2, title: 'Learn CSS'},
    {step: 3, title: 'Learn a freamwork (Bootstrap or tailwind).'},
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


function updateTodo(step, updatedData) {
    let index = findIndex(step)

    if (index !== -1) {
        todos[index] = updatedData
    }else {
        console.log('Cannot update')
    }

    return todos
}

updateTodo(3, {step: 3, title: 'Learn a CSS freamwork (Bootstrap or tailwind).'})


//console.log(findIndex(3))
//console.log(findIndex(6))
//console.log(findIndex(4))

console.log(todos)