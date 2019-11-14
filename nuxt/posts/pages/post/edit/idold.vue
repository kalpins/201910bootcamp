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
  async asyncData({ params, app }) {
    const response = await app.$axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return {
      title: response.data.title,
      body: response.data.body,
      userId: response.data.userId,
      id: response.data.id
    };
  },
  methods: {
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
        .put(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
          id: this.id,
          title: this.title,
          body: this.body,
          userId: this.userId
        })
        .then(response => console.log(response))
        .catch(e => console.log(e.response))
        .finally(() => console.log("Finally"));
    }
  }
};
</script>

<style>
/* algoritms */
/* 1) iegūt post no id kas ir parametrā (skatīt kā lapu post/_id.vue)
2) izveidot formu (skatīt post/create.vue)
3) iegūtos datus saglabāt mainīgajos un ievadīt formā
4) izmantot this.$axios.put(...) */
/*
retrun {post:response.data}

return {title:response.data.title, body:response.data.body ...}


retrun {post:response.data}
v-model="post.title"
title:this.post.title

"posts/" +this.post.id

`posts/${this.post.id}` */
</style>

