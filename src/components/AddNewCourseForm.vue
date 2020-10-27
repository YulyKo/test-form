<template>
  <form @submit.prevent="addCourse">
    <input type="text"
           v-model="courseName"
           @focusout="localValid"
           placeholder="не більше 40 сиволів"
           maxlength="40"
           required
           autofocus>
    <p>Message {{ errorMessage }}</p>
    <button type="submit">Add category</button>
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

<style>

</style>
