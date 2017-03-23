<template>
    <form  v-on:submit.prevent="addTodo(newTodo)">
        <div class="form-group">
            <input v-model="newTodo.title"
                   type="text"
                   class="form-control">
        </div>
        <div class="form-group">
            <input v-model="newTodo.body"
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
                newTodo:{id:null,title:'',body:'',completed:false}
            }
        },
        methods: {
            addTodo(newTodo){
                this.axios
                    .post('http://laravel-vue.dev/api/todo/create', {
                        title: this.newTodo.title,
                        body:this.newTodo.body,
                        completed:this.newTodo.completed
                    })
                    .then(response => {
                        this.todos.push(response.data);
                    });
                this.newTodo = {id:null,title:'',body:'',completed:false}
            }
        }
    }
</script>