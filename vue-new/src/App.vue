<template>
  <div id="app">
    <button @click="btn">点击</button>
    <span>{{name}}</span>
  </div>
</template>

<script>
export default {
  name: "app",
  // data: () => ({
  //   a: 2
  // }),
  methods: {
    btn() {
      this.$store.dispatch("addFirst");
    }
  },
  computed: {
    name() {
      return this.$store.state.first.a;
    }
  },
  created() {
    // this.$store.dispatch("addFirst", 2);
  },
  updated() {},
  mounted() {}
};
</script>

<style>
</style>
