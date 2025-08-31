<template>
  <div class="rounded-lg border border-gray-300 w-[250px] p-4">
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
      <span class="bg-yellow-500 text-green-700 px-2 py-1 rounded-lg text-sm">${{ product.price }}</span>
    </div>
    <img :src="product.image" alt="" class="w-full rounded-md mb-2">
    <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button
      type="button"
      @click="$emit('add-to-cart', product)"
      class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup>
defineProps(['product']);
</script>
