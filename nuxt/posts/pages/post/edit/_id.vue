<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col cols="12">
        <v-form method="post" @submit="createPost">
          <v-text-field
            v-model="post.title"
            type="text"
            name="Title"
            placeholder="title"
          >Default Slot</v-text-field>
          <v-textarea v-model="post.body" name="body" id="body" cols="30" rows="10"></v-textarea>
          <v-text-field
            v-model="post.userId"
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
  async asyncData({ params, app }) {
    const response = await app.$axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    console.log(response.data);
    return { post: response.data };
    // return {title:response.data.title, body:response.data.body}
  },
  methods: {
    createPost: function() {
      this.$axios
        .put("https://jsonplaceholder.typicode.com/posts/" + this.post.id, {
          title: this.post.title,
          body: this.post.body,
          userId: this.post.userId,
          id: this.post.id
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
