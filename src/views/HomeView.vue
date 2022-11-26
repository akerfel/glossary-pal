// View.vue
<script>
export default {
   props: ["greeting"],
};
</script>

// Include HTML here
<template>
  <p class="greeting">{{ greeting }}</p>
</template>

// Include CSS here
// Remember to include scoped to isolate 
// CSS to this file
<style scoped>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
