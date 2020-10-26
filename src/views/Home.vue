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
</style>
