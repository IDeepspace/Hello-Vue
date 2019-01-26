<template>
  <div class='todo-wrapper'>
    <div class='todo-container'>
      <section>
        <div class='todo-add-wrapper'>
          <input
            v-model='inputField'
            v-on:keyup.enter='addTodo'
            class='todo-input'
            placeholder='Add Todo Item'
          >
          <button @click='addTodo' class='add-btn'>Add Todo</button>
        </div>
      </section>

      <section>
        <ul>
          <li v-for='todo in todoList' :key='todo.key'>
            <div class='todo-list-item'>
              <input type='checkbox' v-on:change='toggle(todo)' v-bind:checked='todo.complete'>
              <div class='togo-list-name'>
                <del v-if='todo.complete'>
                  <h5>{{ todo.name }}</h5>
                </del>
                <span v-else>
                  <h5>{{ todo.name }}</h5>
                </span>
              </div>
              <span @click='deleteTodo(todo)' class='delete'>X</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>


<script>

export default {
  name: 'TodoList',
  methods: {
    addTodo() {
      const todo = this.inputField;
      if (todo.trim() !== '') {
        this.todoList.push(
          {
            name: todo,
            complete: false,
          },
        );
      }
      this.inputField = '';
    },
    deleteTodo(todo) {
      const addedTodo = todo;
      const index = this.todoList.indexOf(addedTodo);
      this.todoList.splice(index, 1);
    },
    toggle(todo) {
      const addedTodo = todo;
      addedTodo.complete = !addedTodo.complete;
    },
  },
  data() {
    return {
      inputField: '',
      todoList: [],
    };
  },
};
</script>


<style scoped>
li {
  list-style: none;
}
h5 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
  font-size: 1.25rem;
}
.todo-wrapper {
  text-align: center;
  margin: 0 auto;
  display: flex;
}
.todo-container {
  width: 70%;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(50, 50, 93, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.07) !important;
  padding: 50px;
}
.todo-add-wrapper {
  padding: 20px;
  width: 60%;
  display: block;
  margin: 0 auto;
}
.todo-input {
  width: 250px;
  padding: 10px;
}
.add-btn {
  padding: 10px;
  background-color: #32ba80;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 5px;
}
.todo-list-item {
  display: flex;
  width: 70%;
  height: 50px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #e6e6e6;
  margin: 10px auto;
}
.todo-list-item input {
  font-size: 20px;
}
.todo-list-item .togo-list-name {
  width: 90%;
  font-size: 1.25rem;
  font-family: inherit;
  line-height: 1.2;
  color: inherit;
  margin-bottom: 0px;
  font-weight: normal;
}
.delete {
  color: pink;
  cursor: pointer;
  font-size: 16px;
  font-family: fantasy;
}
.delete:hover {
  color: red;
}
</style>
