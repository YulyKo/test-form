<template>
  <form @submit.prevent="addCourse">
    <input type="text" class="text input"
           v-model.trim="courseName"
           @focusout="localValid"
           placeholder="не більше 40 сиволів"
           minlength="2"
           maxlength="40"
           autofocus>
    <p class="text text--error">Message {{ errorMessage }}</p>
    <button type="submit" class="text button button--add-new-course">Add category</button>
  </form>
</template>

<script>
import { validCourseName } from '@/utils/_validation';

export default {
  data() {
    return {
      courseName: '',
      errorMessage: '',
    };
  },
  methods: {
    localValid() {
      const validate = validCourseName(this.courseName);
      if (!validate) this.errorMessage = 'Ім\'я може місти тільки літери, цифри та сиволи: . / * - ( ) _';
      else this.errorMessage = '';
    },
    addCourse() {
      const validate = this.errorMessage === '';
      if (validate) this.$router.push('/subjects');
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../main.sass'

</style>
