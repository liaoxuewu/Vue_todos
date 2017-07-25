<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" @click="deleteCompleted" v-show="completeSize">清除已完成任务</button>
  </div>
</template>
<script>
  export default {
    props:{
      todos:Array,
      deleteCompleted:Function,
      selectAll:Function
    },
    computed: {
      completeSize () {
        /*let totalSize = 0;
        for (var i = 0; i < this.todos.length; i++) {
          var todo = this.todos[i];
          if(todo.complete){
            totalSize ++;
          }
        }
        return totalSize;*/
        //reduce:对数组数据进行统计,第二个参数是初始值

        return this.todos.reduce((preTotel,todo) => {
          return preTotel += todo.complete ? 1 : 0;
        },0)
      },
      isCheckAll:{
        get () {
          return this.completeSize === this.todos.length && this.todos.length > 0;
        },
        set (value) {
          //更新todos
          this.selectAll(value);
        }
      }
    }
  }
</script>
<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
