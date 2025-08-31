<template>
  <nav class="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
    <!-- Left -->
    <div class="w-1/3 text-xl font-bold">Shop</div>

    <!-- Center -->
    <div class="w-1/3 flex justify-center gap-4">
      <router-link to="/" class="hover:text-yellow-300">Shop</router-link>
      <router-link to="/about" class="hover:text-yellow-300">About</router-link>
      <router-link to="/contact" class="hover:text-yellow-300">Contact</router-link>
    </div>

    <!-- Right -->
    <div class="w-1/3 flex justify-end">
      <router-link to="/cart" class="hover:text-yellow-300">Cart ({{ cart.length }})</router-link>
    </div>
  </nav>

  <router-view :cart="cart" @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />

  <Footer />
  
</template>

<script setup>
import { ref, provide } from 'vue';
import Footer from './components/Footer.vue'

const cart = ref([]);

function addToCart(product) {
  cart.value.push(product);
}

function removeFromCart(productId) {
  cart.value = cart.value.filter(p => p.id !== productId);
}

provide('cart', cart);
provide('addToCart', addToCart);
provide('removeFromCart', removeFromCart);
</script>
