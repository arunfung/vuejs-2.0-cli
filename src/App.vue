<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>my Todos  {{todoCount}}
      <!--<span v-show="remaining">({{remaining}})</span>-->
    </h1>
    <router-view></router-view>
    <!--<todos :todos="todos"></todos>-->
  </div>
</template>

<script>
export default {
    name: 'app',
    mounted(){
        this.$store.dispatch('getTodos')
    },
    computed:{
        todoCount(){
            return this.$store.state.todos.length;
        }
//        remaining() {
//            return this.todos.filter(function (todo) {
//                return !todo.completed;
//            }).length;
//        }
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
