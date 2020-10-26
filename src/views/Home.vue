<template>
  <main class="page home">
    <button-add />
  </main>
</template>

<script>
// @ is an alias to /src
import AddNewCourseButton from '@/components/AddNewCourseButton.vue';

export default {
  name: 'Home',
  components: {
    'button-add': AddNewCourseButton,
  },
};
</script>
<style lang="sass" scoped>
</style>
