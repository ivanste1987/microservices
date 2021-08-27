<template>
  <div>
    <input type="text" name="title" v-model="newComment.title" />
    <input type="text" name="text" v-model="newComment.text" />
    <button @click="createComment">Create Post</button>
  </div>
</template>

<script>
export default {
  props: ["postID"],
  data() {
    return {
      newComment: {},
    };
  },
  methods: {
    createComment() {
        const comment = {
            id: this.postID,
            title: this.newComment.title,
            text: this.newComment.text
        }
      this.$store.dispatch("CREATE_NEW_COMMENT", comment);
    },
  },
};
</script>

<style>
</style>