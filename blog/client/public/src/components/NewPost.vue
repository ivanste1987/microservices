<template>
  <div>
    <input type="text" name="title" id="title" v-model="newPost.title" />
    <input type="text" name="text" id="text" v-model="newPost.text" />
    <button @click="createPost">Create Post</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newPost: {},
    };
  },
  methods: {
    createPost() {
      this.$store.dispatch("CREATE_NEW_POST", this.newPost);
    },
  },
};
</script>

<style>
</style>