<template>
  <div>
    <h1>Post list</h1>
    <section>
      <article v-for="p in allPosts" :key="p.id">
        <h2>{{ p.title }}</h2>
        <p>{{ p.text }}</p>
        <comments :commentID="p.id"></comments>
        <new-comment :postID="p.id"></new-comment>
      </article>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NewComment from "../components/NewComment.vue"
import Comments from "../components/Comments.vue"
export default {
  components:{
    NewComment, Comments
  },
  mounted() {
    this.getAllPosts();
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allPosts"]),
  },
  methods: {
    getAllPosts() {
      this.$store.dispatch("GET_ALL_POSTS");
    },
  },
};
</script>

<style>
</style>