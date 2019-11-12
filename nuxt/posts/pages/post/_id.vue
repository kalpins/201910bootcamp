<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>{{post.title}}</v-card-title>
      <v-card-text>{{post.body}}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  async asyncData({ params, app }) {
    const response = await app.$axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return { post: response.data };
  }
};
</script>

<style>
</style>
