<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="getTodos">Get todos</button>
    <ul>
      <li
        v-for="(todo,index) in todos"
        :key="'todo_'+index"
        :class="{completed:todo.completed}"
      >{{todo.id}} {{todo.title}} {{todo.completed}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Fake data REST",
      todos: []
    };
  },
  methods: {
    getTodos: function() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(
          response => ((this.todos = response.data), console.log(this.todos))
        );
    }
  },
  mounted() {
    console.log("I'm mounted");
    // axios.get('https://jsonplaceholder.typicode.com/todos').then(
    //     response => (this.todos = response.data, console.log(this.todos))
    // )
  }
};
</script>

<style>
</style>