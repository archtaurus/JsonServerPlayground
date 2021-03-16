const api = axios.create({ baseURL: 'http://localhost:3000' })

function init() {
    return {
        newTodo: '',
        todos: [],
        async loadTodos() {
            try {
                const response = await api.get('/todos?_sort=createdAt&_order=desc')
                this.todos = response.data
            } catch (error) {
                console.error(error)
            }
        },
        async addTodo() {
            try {
                const response = await api.post('/todos', { title: this.newTodo, finished: false, createdAt: Date.now() })
                console.log(response.data)
                this.todos.unshift(response.data)
            } catch (error) {
                console.error(error)
            }
        },
        async toggleTodo(todo) {
            try {
                await api.patch(`/todos/${todo.id}`, { finished: !todo.finished })
                todo.finished = !todo.finished
            } catch (error) {
                console.error(error)
            }
        },
        async deleteTodo(todo) {
            try {
                this.todos = this.todos.filter((t) => t.id != todo.id)
                await api.delete(`/todos/${todo.id}`)
            } catch (error) {
                console.error(error)
            }
        },
    }
}
