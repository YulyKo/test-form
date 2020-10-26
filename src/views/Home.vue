<template>
  <div class="page home">
    <button-add />
  </div>
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
// .home
//   -webkit-transmition: all 3s ease
//   -moz-transmition: all 3s ease
//   -o-transmition: all 3s ease
//   transition: 3s
</style>
