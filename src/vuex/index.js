import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        newTodo:{id:null,title:'',body:'',completed:false}
    },
    mutations: {
        get_todos_list (state,todos) {
            state.todos = todos
        },
        complete_todo (state, todo) {
            todo.completed = !todo.completed
        },
        delete_todo (state, index) {
            state.todos.splice(index,1);
        },
        add_todo (state, todo) {
            state.todos.push(todo)
        }
    },
    actions : {
        getTodos (store) {
            Vue.axios
                .get('http://laravel-vue.dev/api/todos')
                .then(response => {
                    store.commit('get_todos_list',response.data)
                })
        },
        completeTodo (store, todo) {
            Vue.axios
                .patch('http://laravel-vue.dev/api/todo/'+todo.id+'/completed')
                .then(response =>{
                    store.commit('complete_todo',todo)
                });
        },
        removeTodo (store, payload) {
            Vue.axios
                .delete('http://laravel-vue.dev/api/todo/'+payload.todo.id+'/delete')
                .then(response =>{
                    store.commit('delete_todo',payload.index);
                });
        },
        saveTodo (store, todo) {
            Vue.axios
                .post('http://laravel-vue.dev/api/todo/create', {
                    title: todo.title,
                    body: todo.body,
                    completed: todo.completed
                })
                .then(response => {
                    store.commit('add_todo',response.data)
                });
            store.state.newTodo = { id:null,title:'',body:'',completed:false }
        }
    }
});