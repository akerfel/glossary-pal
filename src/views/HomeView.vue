// View.vue
<script>
export default {
   props: {
     greeting: String,
     word: String,
  }
};
</script>

// Include HTML here
<template>
  <p class="greeting">{{ greeting }}</p>
  <p class="greeting">{{ word }}</p>
</template>

// Include CSS here
// Remember to include scoped to isolate 
// CSS to this file
<style scoped>
.greeting {
  color: rgb(0, 255, 13);
  font-weight: bold;
}
</style>