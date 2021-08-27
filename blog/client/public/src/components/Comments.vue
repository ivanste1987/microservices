<template>
  <article>
    <div v-for="c in allPostComments" :key="c.id" style="border: 1px solid red">
      <p>{{ c.text }}</p>
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["commentID"],
  mounted() {
    this.getCommnets();
 
  },
  computed: {
    ...mapGetters(["allPostComments"]),
  },
  methods: {
    getCommnets() {
      this.$store.dispatch("GET_ALL_COMMENTS",{id: this.commentID});
    },
  },
};
</script>

<style>
</style>