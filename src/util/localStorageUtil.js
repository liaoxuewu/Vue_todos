const TODOS_KEY = 'todos_key';

export default {
  //获取todos
  getTodos () {//返回数组，如果没有数据，返回[]
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]');
  },
  //保存todos
  saveTodos (todos) {//存储数组对应的json
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
  }
}
