<template>
  <div>
    <h1>Hello from nuxt</h1>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">OVERLINE</div>
          <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn text>Button</v-btn>
        <v-btn text>Button</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn @click="getTodos" color="success">Get todos</v-btn>
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
      this.$axios
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
