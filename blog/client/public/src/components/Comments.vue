<template>
  <article>
    <h4>Post comments</h4>
    <div v-for="c in commetns" :key="c.id" class="com-card">
      <h6>{{ c.title }}</h6>
      <p>{{ c.text }}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: ["commetns"],
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