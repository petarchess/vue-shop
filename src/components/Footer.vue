<template>
  <footer class="bg-gray-900 text-white py-10 mt-12">
    <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6 text-sm">
      
      <div>
        <h3 class="text-lg font-semibold mb-2">YourShop</h3>
        <p class="text-gray-400">Quality you can feel. Service you can trust.</p>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Shop</h4>
        <ul class="space-y-1 text-gray-400">
          <li><a href="#" class="hover:text-white">All Products</a></li>
          <li><a href="#" class="hover:text-white">New Arrivals</a></li>
          <li><a href="#" class="hover:text-white">Best Sellers</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Company</h4>
        <ul class="space-y-1 text-gray-400">
          <li><a href="/about" class="hover:text-white">About Us</a></li>
          <li><a href="/contact" class="hover:text-white">Contact</a></li>
          <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Stay Connected</h4>
        <form @submit.prevent="subscribe">
          <input
            v-model="email"
            type="email"
            placeholder="Your email"
            class="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 mb-2"
          />
          <button class="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition">Subscribe</button>
        </form>
      </div>

    </div>

    <div class="mt-8 text-center text-gray-500 text-xs">
      &copy; {{ new Date().getFullYear() }} YourShop. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

function subscribe() {
  if (email.value.trim()) {
    alert(`Subscribed with: ${email.value}`)
    email.value = ''
  }
}
</script>
