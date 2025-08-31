<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-2xl shadow">
    <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block mb-1 text-sm font-medium">Name</label>
        <input v-model="form.name" type="text" required class="w-full border px-3 py-2 rounded" />
      </div>

      <div class="mb-4">
        <label class="block mb-1 text-sm font-medium">Email</label>
        <input v-model="form.email" type="email" required class="w-full border px-3 py-2 rounded" />
      </div>

      <div class="mb-4">
        <label class="block mb-1 text-sm font-medium">Phone (optional)</label>
        <input v-model="form.phone" type="tel" class="w-full border px-3 py-2 rounded" />
      </div>

      <div class="mb-4">
        <label class="block mb-1 text-sm font-medium">Message</label>
        <textarea v-model="form.message" required rows="4" class="w-full border px-3 py-2 rounded"></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>

      <p v-if="successMessage" class="mt-4 text-green-600">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const successMessage = ref('')

function handleSubmit() {
  // Here you would send the form to your backend or email service
  console.log('Form submitted:', form)

  // Example success flow
  successMessage.value = 'Thank you! Your message has been sent.'
  Object.keys(form).forEach(key => form[key] = '')
}
</script>