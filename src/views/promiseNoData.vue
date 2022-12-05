<script setup></script>

<script>
export default {
  props: ["promiseState"],
};
</script>

<template>
  <div v-if="!this.promiseState.promise">No data</div>
  <div v-else-if="!this.promiseState.data && !this.promiseState.error">
    <img style="margin-top: 250px" src="../assets/loading.gif" />
  </div>
  <div v-else-if="!this.promiseState.data && this.promiseState.error">
    {{ this.promiseState.error.toString() }}
  </div>
</template>

<style scoped></style>
