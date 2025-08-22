<template>
  <div class="btn" @click="emit('getUser')">Search</div>
</template>

<style scoped>
.btn {
  padding: 12px 20px;
  background-color: #0079fb;
  color: #fff;
  border-radius: 8px;
  font-weight: 400;
  cursor: pointer;
}
</style>
<script setup>
const emit = defineEmits(['getUser'])
</script>
