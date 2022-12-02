<script>
import ReviewDeckView from "../views/ReviewDeckView.vue";
export default {
  components: { ReviewDeckView },
  props: {
    model: Object,
  },
  methods: {
    confirmAnswerACB() {
      
    }
  },
};
</script>

<template>
  <ReviewDeckView :model="model" :onConfirmAnswer="confirmAnswerACB"/>
</template>
