<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeader :add="add"></todoHeader>
      <List :todos="todos" :delete-todo="deleteTodo"></List>
      <todoFooter :todos="todos" :delete-completed="deleteCompleted" :select-all="selectAll"></todoFooter>
    </div>
  </div>
</template>
<script>
  import Header from './Header.vue';
  import List from './List.vue';
  import Footer from './Footer.vue';
  import LocalStorageUtil from '../util/localStorageUtil';

  export default {
    data () {
      return {
        /*todos:[
          {title:'吃饭',complete:false},
          {title:'睡觉',complete:true},
          {title:'打豆豆',complete:true}
        ]*/
        todos:[]
      }
    },

    created () {
      this.todos = LocalStorageUtil.getTodos();
    },
    methods:{
      add (todo) {
        this.todos.unshift(todo);
      },
      deleteTodo (index) {
        this.todos.splice(index,1);
      },
      deleteCompleted () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selectAll (isSelect) {
        this.todos.forEach(todo => {
          todo.complete = isSelect;
        });
      }
    },
    watch: {
      todos: {
        deep:true,//深度监视
        /*handler: function (val) {//todos发生了变化
          LocalStorageUtil.saveTodos(val);//保存todos
        }*/
        handler:LocalStorageUtil.saveTodos
      }
    },
    components:{
      todoHeader:Header,
      List,
      todoFooter:Footer
    }
  }
</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
