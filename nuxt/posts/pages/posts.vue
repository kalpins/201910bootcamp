<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col v-for="(post,index) in posts" :key="'post_'+index" cols="12" sm="4">
        <v-card :to="`/post/${post.id}`">
          <v-card-title primary-title>{{post.title}}</v-card-title>
          <v-card-text>{{post.body}}</v-card-text>
          <v-btn color="success" block text :to="`/post/edit/${post.id}`">Edit</v-btn>
          <v-btn color="error" block text @click.prevent="deletePost(post.id, index)">Delete</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ app }) {
    const posts = await app.$axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return { posts: posts.data };
  },
  methods: {
    deletePost(id, index) {
      console.log("deletePost: " + id);
      this.$axios
        .delete("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(response => {
          console.log(response);
          this.posts.splice(index, 1);
        });
    }
  }
};
</script>

<style>
</style>
