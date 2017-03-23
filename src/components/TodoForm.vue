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
        computed: {
            newTodo () {
                return this.$store.state.newTodo
            }
        },
        methods: {
            addTodo(newTodo){
               this.$store.dispatch('saveTodo',newTodo)
            }
        }
    }
</script>