<template>
  <div>
    <h1>Post list</h1>
    <section>
      <article v-for="p in allPosts" :key="p.id" class="card">
        <h2>{{ p.title }}</h2>
        <p>{{ p.text }}</p>
        <comments :commetns="p.comments"></comments>
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

<style lang="scss">
section{
  width: 800px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .card{
    box-shadow: 0 0 6px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
  }
}
</style>