<script>
import InfoView from "../views/InfoView.vue";
export default {
  components: { InfoView },
  props: {
    model: Object,
    initModel: Function,
  },
  methods: {},
};
</script>

<template>
  <InfoView />
</template>
