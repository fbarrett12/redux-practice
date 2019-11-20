import { createStore } from 'redux'

// The trash way of making a reducer

// function counter(state, action) {
//     if (typeof state === 'undefined') {
//         return 0
//     }

//     if (action.type === 'INCREMENT') {
//         return state + 1
//     } else if (action.type === 'DECREMENT') {
//         return state - 1
//     } else {
//         return state
//     }
// }

// The good way of making a reducer


const counter = (state = 0, action) => {
    
    switch(action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state 
    }
}

// adds a counter without mutating the original array, similar to concatenating
const addCounter = (list) => {
    return [...list, 0]
}

// Accepts an array of number and the index of the number to skip from the array
// takes slices the array starting before and after the index(number we want to skip)
// and concatenates them making them on new array

const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ]
}




// Creates the store and specifies the reducer being used
const store = createStore(counter)

// function that renders the initial state before anything else runs
const render = () => {
    document.body.innerText = store.getState()
}

//  Appends previous function to the store
store.subscribe(render)

// Calls function so that initial state gets rendered on load
render()

// Slaps changes coming fromt he action on the DOM
document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

const toggleTodo = (todo) => {
    return {
        ...todo, 
        completed: !todo.completed
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, 
                {
                    id: action.id,
                    text: action.text,
                    completed: false

                }
            ] 
            default:
                return state
    }  
}

// Creating a store from scratch 





// Michael Jackson's Expect Library

// expect(
//     counter(0, {type: 'INCREMENT'})
// ).toEqual(1)

// expect(
//     counter(1, {type: 'INCREMENT'})
// ).toEqual(2)

// expect(
//     counter(2, {type: 'DECREMENT'})
// ).toEqual(1)

// expect(
//     counter(1, {type: 'SOMETHING_ELSE'})
// ).toEqual(1)

// expect(
//     counter(undefined, {})
// ).toEqual(0)