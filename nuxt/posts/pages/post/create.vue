<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="12">
        <v-form method="post" @submit="createPost">
          <v-text-field v-model="title" type="text" name="Title" placeholder="title">Default Slot</v-text-field>
          <v-textarea v-model="body" name="body" id="body" cols="30" rows="10"></v-textarea>
          <v-text-field
            v-model="userId"
            type="number"
            name="UserID"
            value="1"
            placeholder="user ID"
          ></v-text-field>
          <v-btn @click="createPost">Submit</v-btn>
        </v-form>
        <!-- <form action method="post">
          <input type="text" name="Title" placeholder="title" value="My title" />
          <textarea name="body" id="body" cols="30" rows="10"></textarea>
          <input type="number" name="UserID" value="1" placeholder="user ID" />
          <input type="submit" value="submit" />
        </form>-->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      body: "",
      userId: 1
    };
  },
  methods: {
    getTodos: function() {
      this.$axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(
          response => ((this.todos = response.data), console.log(this.todos))
        );
    },
    createPost: function() {
      console.log("Posted");
      // console.log(this.title);
      // console.log(this.body);
      // console.log(this.userId);
      console.log(this.title, this.body, this.userId);
      if (this.title.length < 6) {
        console.log("ERROR");
        return;

        //veeValidate
      }

      this.$axios
        .post("https://jsonplaceholder.typicode.com/post", {
          title: this.title,
          body: this.body
        })
        .then(response => console.log(response))
        .catch(e => console.log(e.response))
        .finally(() => console.log("Finally"));
    }
  }
};
</script>

<style>
</style>
