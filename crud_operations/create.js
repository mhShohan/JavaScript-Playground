let todos = [
    {step: 1, title: 'Learn HTML.'},
    {step: 2, title: 'Learn CSS'},
    {step: 3, title: 'Learn a CSS freamwork (Bootstrap or tailwind).'},
    {step: 4, title: 'Learn Javascript fundamentals.'},
    {step: 5, title: 'Learn Javascript DOM manipulation.'},
]


//todos.push({step:6, title: 'learn React'})
//todos.unshift({step:0, title: 'learn basic use of computer'})

function addLast(singleTodo) {
    todos[todos.length] = singleTodo
}

//addLast({step:6, title: 'learn React'})

function addFirst(singleTodo) {
    let newArray = []
    newArray[0] = singleTodo

    for (let i = 0; i < todos.length; i++) {
        newArray[i + 1] = todos[i]
    }

    todos = newArray

    return todos
}

 addFirst({step: 0, title: 'learn basic use of computer'})


console.log(todos)