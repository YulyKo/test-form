<template>
  <div>
    <button class="text button button--open-modal-form" @click="switchVisibilityModalForm">
        +
    </button>
    <section v-show="visibleForm">
      <modal-form />
      <button class="title button button--close" @click="switchVisibilityModalForm">X</button>
    </section>
  </div>
</template>

<script>
import AddNewCourseForm from '@/components/AddNewCourseForm.vue';

export default {
  data() {
    return {
      visibleForm: false,
    };
  },
  methods: {
    switchVisibilityModalForm() {
      this.visibleForm = this.visibleForm === false;
    },
  },
  components: {
    'modal-form': AddNewCourseForm,
  },
};
</script>

<style lang="sass" scoped>
@import '../main.sass'

// .button
//   background: $white
//   height: 12em
//   width: 12em
//   border-radius: 10px
//   border: none
//   cursor: pointer
//   @include transition(all .3s cubic-bezier(0.4, 0, 1, 1))
//   box-shadow: 0 0 41px -11px $gray
//   &:hover
//     background-color: $green
//     box-shadow: inset 0 0 15px -11px $green
//     color: $white
</style>
