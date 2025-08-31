<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-semibold mb-6 text-gray-800">🛒 Your Cart</h2>

    <div v-if="cart.length === 0" class="text-center text-gray-500">
      <p class="mb-4">Your cart is currently empty.</p>
      <router-link to="/" class="text-blue-600 hover:underline">
        Continue shopping →
      </router-link>
    </div>

    <div v-else class="space-y-6">
      <CartItem
        v-for="item in cart"
        :key="item.id"
        :item="item"
        @remove="remove(item.id)"
      />

      <div class="text-right mt-6 border-t pt-4">
        <h3 class="text-xl font-semibold text-gray-700">
          Total: <span class="text-green-600">€{{ totalPrice.toFixed(2) }}</span>
        </h3>
        <button
          class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import CartItem from '../components/CartItem.vue'

const cart = inject('cart')
const removeFromCart = inject('removeFromCart')

const remove = (id) => removeFromCart(id)

const totalPrice = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price, 0)
)
</script>
