<template>
  <div style="display: flex; gap: 1rem; align-items: center; border-bottom: 1px solid #ddd; padding: 0.5rem 0;">
    <img :src="item.image" alt="" style="width: 50px;">
    <div style="flex: 1;">
      <h4>{{ item.name }}</h4>
      <p>€{{ item.price }}</p>
    </div>
    <button @click="$emit('remove')">Remove</button>
  </div>
</template>

<script setup>
defineProps(['item']);
</script>
