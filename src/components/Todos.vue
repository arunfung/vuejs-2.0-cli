<template>
    <ul class="list-group">
        <li class="list-group-item"
            v-bind:class="{'completed' : todo.completed}"
            v-for="(todo,index) in todos ">
            {{todo.title}}
            <button class="btn btn-warning btn-xs pull-right" v-on:click="deleteTodo(index)">delete</button>
            <button class="btn btn-xs pull-right margin-right-10"
                    v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
                    v-on:click="toggleCompleted(todo)">
                {{todo.completed ? 'undo' : 'completed'}}
            </button>
        </li>
    </ul>
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
    export default{
        props : ['todos'],
        methods : {
            deleteTodo(index){
                this.todos.splice(index,1);
            },
            toggleCompleted(todo){
                todo.completed = !todo.completed;
            }
        }
    }
</script>