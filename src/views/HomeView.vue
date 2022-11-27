<script>
export default {
  props: ["listNames"],
};
</script>

<template>
  <p class="title">{{ "Lists:"}}</p>
  <p class="listNames">{{ listNames }}</p>
</template>

<!-- Include CSS here
     Remember to include scoped to isolate 
     CSS to this file  -->
<style scoped>
.title {
  color: rgb(0, 255, 242);
  font-weight: bold;
}

.listNames {
  color: rgb(0, 255, 13);
  font-weight: bold;
}
</style>