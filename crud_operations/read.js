let todos = [
    {step: 1, title: 'Learn HTML.'},
    {step: 2, title: 'Learn CSS'},
    {step: 3, title: 'Learn a CSS freamwork (Bootstrap or tailwind).'},
    {step: 4, title: 'Learn Javascript fundamentals.'},
    {step: 5, title: 'Learn Javascript DOM manipulation.'},
]

//console.log(todos)
//console.log(todos[2])


function readByStep(step){
    for(let i =0; i < todos.length; i++){
        if(todos[i].step === step){
            return todos[i]
        }
    }
}

console.log(readByStep(3))