<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view></router-view>-->
    <h1>my Todos
      <span v-show="remaining">({{remaining}})</span>
    </h1>
    <todos :todos="todos"></todos>
    <todo-form :todos="todos"></todo-form>
  </div>
</template>

<script>
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
export default {
  name: 'app',
    data() {
      return {
          todos:[
              {id:1,title:'my todo',completed:false}
          ]
      }
    },
    mounted(){
        this.axios.get('http://laravel-vue.dev/api/todos').then(response => {
//            console.log(response.data)
            this.todos = response.data;
        })
    },
    computed:{
        todoCount(){
            return this.todos.length;
        },
        remaining() {
            return this.todos.filter(function (todo) {
                return !todo.completed;
            }).length;
        }
    },
    components: {
      Todos,TodoForm
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
