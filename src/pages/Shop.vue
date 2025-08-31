<template>
  <div style="padding: 1rem;">
    <div style="margin-bottom: 1rem;">
      <input class="w-xl border-2 border-indigo-500/75 rounded-lg" v-model="search" placeholder="Search products..." style="padding: 0.5rem;">
      <select v-model="selectedCategory" style="margin-left: 1rem;">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category">{{ category }}</option>
      </select>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
      <ProductCard 
        v-for="p in filteredProducts" :key="p.id" :product="p"
        @add-to-cart="$emit('add-to-cart', p)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard.vue';

const search = ref('');
const selectedCategory = ref('');

const categories = [...new Set(products.map(p => p.category))];

const filteredProducts = computed(() => {
  return products.filter(p => 
    (!selectedCategory.value || p.category === selectedCategory.value) &&
    p.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

