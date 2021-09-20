<template>
  <article>
    <h4>Post comments</h4>
    <div v-for="c in trackComments" :key="c.id" class="com-card">
      <p>{{ c.text }}</p>
    </div>
  </article>
</template>

<script>
// import { mapActions } from "vuex";
import axios from "axios";
export default {
  props: ["commentID"],
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
  
      this.getCommnets();
    
  },
  computed: {
    trackComments() {
      return this.comments;
    },
  },
  methods: {
    async getCommnets() {
      const response = await axios.get(
        `http://localhost:5000/posts/${this.commentID}/comments`
      );
      this.comments = response.data;
    },
  },
};
</script>

<style lang="scss">
article{
  width: 800px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  .com-card{
    box-shadow: 0 0 6px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 250px;
  }
}
</style>