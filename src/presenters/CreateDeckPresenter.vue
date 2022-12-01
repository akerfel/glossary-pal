<script>
import CreateDeckView from "../views/CreateDeckView.vue";
export default {
  components: { CreateDeckView },
  props: {
    model: Object,
  },
  methods: {},
};
</script>

<template>
  <CreateDeckView :model="model" />
</template>
