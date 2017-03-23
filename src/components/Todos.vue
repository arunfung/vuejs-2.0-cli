<template>
    <div id="todos">
        <ul class="list-group">
            <li class="list-group-item"
                v-bind:class="{'completed' : todo.completed}"
                v-for="(todo,index) in todos ">
                <router-link :to="{ name: 'todo', params: { id: todo.id }}">{{todo.title}}</router-link>
                <button class="btn btn-warning btn-xs pull-right"
                        v-on:click="deleteTodo(index,todo)">delete</button>
                <button class="btn btn-xs pull-right margin-right-10"
                        v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
                        v-on:click="toggleCompleted(todo)">
                    {{todo.completed ? 'undo' : 'completed'}}
                </button>
            </li>
        </ul>
        <todo-form :todos="todos"></todo-form>
    </div>
</template>
<style>
    .completed{
        color: #5cb85c;
        text-decoration: line-through;
    }
    .margin-right-10 {
        margin-right: 10px;
    }
</style>
<script>
    import TodoForm from './TodoForm'
    export default{
        name: "todos",
        props : ['todos'],
        methods : {
            deleteTodo(index,todo){
                this.axios
                    .delete('http://laravel-vue.dev/api/todo/'+todo.id+'/delete')
                    .then(response =>{
                        this.todos.splice(index,1);
                    });
            },
            toggleCompleted(todo){
                this.axios
                    .patch('http://laravel-vue.dev/api/todo/'+todo.id+'/completed')
                    .then(response =>{
                        todo.completed = !todo.completed;
                    });
            }
        },
        components: {
            TodoForm
        }
    }
</script>