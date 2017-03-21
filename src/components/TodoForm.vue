<template>
    <form  v-on:submit.prevent="addTodo(newTodo)">
        <div class="form-group">
            <input v-model="newTodo.title"
                   type="text"
                   class="form-control">
        </div>
        <div class="form-group">
            <button v-if="newTodo.title" class="btn btn-success" type="submit">Add Todo</button>
        </div>
    </form>
</template>

<script>
    export default{
        props : ['todos'],
        data(){
            return {
                newTodo:{id:null,title:'',completed:false}
            }
        },
        methods: {
            addTodo(newTodo){
                this.todos.push(newTodo);
                this.newTodo = {id:null,title:'',completed:false}
            }
        }
    }
</script>