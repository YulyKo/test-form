<template>
  <form>
    <input type="text" v-model="courseName">
    <button type="submit" @click="addCourse">Add category</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      courseName: '',
    };
  },
  methods: {
    addCourse() {
      console.log(this.courseName);
      this.$router.push('/subjects');
    },
  },
};
</script>

<style>

</style>
