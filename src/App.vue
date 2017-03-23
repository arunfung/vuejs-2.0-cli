<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>my Todos
      <span v-show="remaining">({{remaining}})</span>
    </h1>
    <router-view :todos="todos"></router-view>
    <!--<todos :todos="todos"></todos>-->
  </div>
</template>

<script>
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
//            console.log(response.data.data);
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
