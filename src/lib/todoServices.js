const baseUrl = process.env.REACT_APP_BASE_URL

export const getTodos = () => {
    return fetch('http://localhost:8080/todos')
     .then(res => res.json())
}

export const createTodo = (name) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: name, isComplete: false})
    }
    )
     .then(res => res.json())
}

export const updateTodo = (todo) => {
    return fetch(`${baseUrl}${todo.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }
    )
     .then(res => res.json())
}